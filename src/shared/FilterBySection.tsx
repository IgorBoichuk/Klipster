'use client';
import React from 'react';

interface SectionFilterProps {
	sections: string[]; // Массив секцій (може бути масивом назв секцій)
	selectedSection: string | null;
	onSelectSection: (section: string) => void; // Функція, яка обробляє вибір секції
}

const FilterBySection = ({ sections, selectedSection, onSelectSection }: SectionFilterProps) => {
	return (
		<div className='my-4'>
			<select
				value={selectedSection || ''}
				onChange={e => onSelectSection(e.target.value)}
				className='p-2 border rounded-md'
			>
				<option value=''>Виберіть секцію</option>
				{sections.map((section, index) => (
					<option key={index} value={section}>
						{section}
					</option>
				))}
			</select>
		</div>
	);
};

export default FilterBySection;
