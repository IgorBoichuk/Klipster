import React, { useEffect, useState } from 'react';
import { processSections } from '@/helpers/uniqueSections';
import { Product } from '@/types';

interface FilterBySectionProps {
	sections: string[];
	selectedSection: string | null;
	onSelectSection: (section: string) => void;
	filteredCategories: Product[];
}

const FilterBySection = ({ sections, selectedSection, onSelectSection, filteredCategories }: FilterBySectionProps) => {
	const uniqueSections = Array.from(new Set(filteredCategories.map(item => item.section_en)));

	console.log(selectedSection === uniqueSections[0]);

	return (
		<div className='grid grid-cols-4 gap-4 py-4'>
			{sections.map((section, index) => (
				<button
					key={index}
					value={section}
					onClick={() => onSelectSection(section)}
					className={`border rounded-xl p-1 ${section === selectedSection ? 'bg-cyellow text-cwhite' : ''}`}
				>
					{section}
				</button>
			))}
		</div>
	);
};

export default FilterBySection;
