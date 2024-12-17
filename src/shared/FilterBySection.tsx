// FilterBySection.tsx
import useCategories from '@/app/hooks/useCategories';
import { useCategory } from '@/app/providers/CategoryContext';
import { useRouter, useSearchParams } from 'next/navigation';
const FilterBySection = (): JSX.Element => {
	const searchParams = useSearchParams(); // Отримуємо URLSearchParams
	const sectionFromUrl = searchParams?.get('section') ?? null;
	const { sectionName, setSectionName } = useCategory();

	const { sections } = useCategories(sectionFromUrl);
	const router = useRouter();
	const handleSectionClick = (sectionFromUrl: string, sectionForName: string) => {
		setSectionName(sectionForName);
		const newPathName =
			sectionFromUrl === 'reset'
				? ''
				: sectionFromUrl
						?.trim()
						.toLowerCase()
						.replace(/[^a-zа-я0-9\s]/gi, '')
						.replace(/\s+/g, '-');
		router.push(`/categories?section=${newPathName}`);
	};

	return (
		<div className='grid grid-cols-1 gap-4 py-4 '>
			<button
				className={`${
					!sectionName || sectionName === 'Всі категорії' ? 'bg-cyellow text-cwhite' : 'bg-cwhite text-cblack'
				} border rounded-xl   p-2 text-sm`}
				onClick={() => handleSectionClick('reset', 'Всі категорії')}
			>
				Всі категорії
			</button>
			{sections.map((section, index) => (
				<button
					key={index}
					value={section.section_ua}
					onClick={() => handleSectionClick(section.section_en, section.section_ua)} // Перехід на нову сторінку з фільтром
					className={`${
						sectionName === section.section_ua ? 'bg-cyellow text-cwhite' : 'bg-cwhite text-cblack'
					} border rounded-xl p-2 text-sm`}
				>
					{section.section_ua}
				</button>
			))}
		</div>
	);
};

export default FilterBySection;
