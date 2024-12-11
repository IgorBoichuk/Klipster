// FilterBySection.tsx
import useCategories from '@/app/hooks/useCategories';
import { useRouter, useSearchParams } from 'next/navigation';

const FilterBySection = (): JSX.Element => {
	const searchParams = useSearchParams(); // Отримуємо URLSearchParams
	const sectionFromUrl = searchParams?.get('section') ?? null;

	const { sections } = useCategories(sectionFromUrl);
	const router = useRouter();
	const handleSectionClick = (sectionFromUrl: string) => {
		const newPathName =
			sectionFromUrl === 'reset'
				? ''
				: sectionFromUrl
						?.trim()
						.toLowerCase()
						.replace(/[^a-zа-я0-9\s]/gi, '')
						.replace(/\s+/g, '-');
		router.push(`/categories?section=${newPathName}`);
		console.log(sectionFromUrl);
	};

	return (
		<div className='grid grid-cols-1 gap-4 py-1 '>
			<button
				className={`border rounded-xl bg-cwhite text-cblack p-2 text-sm`}
				onClick={() => handleSectionClick('reset')}
			>
				Всі категорії
			</button>
			{sections.map((section, index) => (
				<button
					key={index}
					value={section.section_ua}
					onClick={() => handleSectionClick(section.section_en)} // Перехід на нову сторінку з фільтром
					className={`border rounded-xl bg-cwhite text-cblack p-2 text-sm`}
				>
					{section.section_ua}
				</button>
			))}
		</div>
	);
};

export default FilterBySection;
