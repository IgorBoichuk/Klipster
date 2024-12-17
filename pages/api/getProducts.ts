import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../prisma/lib/prisma';
import { partsitems } from '@prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { category_slug, page = 1, pageSize = 60 } = req.query;

	if (!category_slug || typeof category_slug !== 'string' || category_slug.trim() === '') {
		return res.status(400).json({ error: 'Category slug is required and must be a non-empty string.' });
	}

	const pageNumber = parseInt(page as string, 10);
	const pageSizeNumber = parseInt(pageSize as string, 10);

	if (isNaN(pageNumber) || isNaN(pageSizeNumber) || pageNumber < 1 || pageSizeNumber < 1) {
		return res.status(400).json({
			error: 'Invalid pagination parameters. Page and pageSize must be positive integers.',
		});
	}

	const MAX_PAGE_SIZE = 100;
	const MAX_PAGE_NUMBER = 1000;
	const finalPageSize = Math.min(pageSizeNumber, MAX_PAGE_SIZE);

	if (pageNumber > MAX_PAGE_NUMBER) {
		return res.status(400).json({ error: `Page number cannot exceed ${MAX_PAGE_NUMBER}.` });
	}

	try {
		// const totalCount = await prisma.partsitems.count({
		// 	where: { category_slug: category_slug as string },
		// });

		const totalCountResult = await prisma.$queryRaw<
			{ count: bigint }[]
		>`SELECT COUNT(*) as count FROM partsitems WHERE category_slug = ${category_slug}`;
		const totalCount = Number(totalCountResult[0]?.count || 0);

		// const products = await prisma.partsitems.findMany({
		// 	where: { category_slug: category_slug as string },
		// 	skip: (pageNumber - 1) * finalPageSize,
		// 	take: finalPageSize,
		// });

		const products = await prisma.$queryRaw<partsitems[]>`SELECT *
   FROM partsitems 
   WHERE category_slug = ${category_slug} 
   LIMIT ${pageSizeNumber} OFFSET ${(pageNumber - 1) * pageSizeNumber}`;

		res.status(200).json({
			products,
			totalCount,
			page: pageNumber,
			pageSize: finalPageSize,
		});
	} catch (error) {
		console.error('Error occurred:', error);
		res.status(500).json({
			error: 'Failed to retrieve data',
			details: JSON.stringify(error, Object.getOwnPropertyNames(error)),
		});
	}
}
