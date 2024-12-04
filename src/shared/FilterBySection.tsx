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

const FilterBySection = ({ sections, selectedSection }: FilterBySectionProps) => {
	const router = useRouter();
	const handleSectionClick = (sectionFromUrl: string) => {
		router.push(`/categories?section=${encodeURIComponent(sectionFromUrl)}`);
	};

	return (
		<div className='grid grid-cols-4 gap-4 py-4 bg-cyellow'>
			{sections.map((section, index) => (
				<button
					key={index}
					value={section.section_ua}
					onClick={() => handleSectionClick(section.section_en)} // Перехід на нову сторінку з фільтром
					className={`border rounded-xl p-1 bg-cwhite text-cblack`}
				>
					{section.section_ua}
				</button>
			))}
		</div>
	);
};

export default FilterBySection;
