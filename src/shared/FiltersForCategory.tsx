import React from 'react';

interface FiltersForCategoryProps {
	param: string; // Масив значень для фільтра
	name: string; // Назва фільтра
	data: any[];
}

export const FiltersForCategory: React.FC<FiltersForCategoryProps> = ({ data = [], name, param }) => {
	const uniqueValues = Array.from(new Set(data.map(item => item[param]).filter(value => value))).sort();

	console.log(uniqueValues);
	console.log(data);

	return (
		<div className='border pl-3 pr-2 py-2'>
			<p className='font-semibold mb-2'>{name}</p>
			<ul className='space-y-2'>
				{uniqueValues.map((value, index) => (
					<li key={index} className='flex items-center gap-2'>
						<input type='checkbox' id={`filter-${value}`} className='form-checkbox' />
						<label htmlFor={`filter-${value}`} className='text-sm text-gray-700'>
							{value}
						</label>
					</li>
				))}
			</ul>
		</div>
	);
};
