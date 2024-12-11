// FilterBySection.tsx
import { Category } from '@/types';
import { useRouter } from 'next/navigation';

interface FilterBySectionProps {
	sections: { section_ua: string; section_en: string }[];
	section_ua: string;
	section_en: string;
	selectedSection: string | null;
	onSelectSection: (section: string) => void;
	filteredCategories: Category[];
	sectionFromUrl?: string | null;
}

const FilterBySection = ({ sections }: FilterBySectionProps) => {
	const router = useRouter();
	const handleSectionClick = (sectionFromUrl: string) => {
		const newPathName = sectionFromUrl
			?.trim()
			.toLowerCase()
			.replace(/[^a-zа-я0-9\s]/gi, '')
			.replace(/\s+/g, '-');
		router.push(`/categories?section=${newPathName}`);
		console.log(newPathName);
	};

	return (
		<div className='grid grid-cols-4 gap-4 py-1 bg-cyellow'>
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
