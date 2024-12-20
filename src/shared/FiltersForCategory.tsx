import React from 'react';

export const FiltersForCategory = () => {
	return (
		<div className='border pl-3 pr-2'>
			<p className=''>Filter name:</p>
			<ul className=''>
				<li className='flex gap-4'>
					<input type='checkbox' className='' />
					<p className=''>Filter value</p>
				</li>
				<li className='flex gap-4'>
					<input type='checkbox' className='' />
					<p className=''>Filter value</p>
				</li>
				<li className='flex gap-4'>
					<input type='checkbox' className='' />
					<p className=''>Filter value</p>
				</li>
				<li className='flex gap-4'>
					<input type='checkbox' className='' />
					<p className=''>Filter value</p>
				</li>
				<li className='flex gap-4'>
					<input type='checkbox' className='' />
					<p className=''>Filter value</p>
				</li>
				<li className='flex gap-4'>
					<input type='checkbox' className='' />
					<p className=''>Filter value</p>
				</li>
				<li className='flex gap-4'>
					<input type='checkbox' className='' />
					<p className=''>Filter value</p>
				</li>
			</ul>
		</div>
	);
};
