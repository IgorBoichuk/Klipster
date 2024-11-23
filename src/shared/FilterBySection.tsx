import React from 'react';

interface FilterBySectionProps {
	sections: string[];
	selectedSection: string | null;
	onSelectSection: (section: string) => void;
}

const FilterBySection = ({ sections, selectedSection, onSelectSection }: FilterBySectionProps) => {
	return (
		<div>
			<h3>Фільтр за секцією</h3>
			<select value={selectedSection || ''} onChange={e => onSelectSection(e.target.value)}>
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
