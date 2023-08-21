import './SearchPanel.scss'
function SearchPanel() {
    return (
			<div className='search-panel'>
				<div className='search-panel__box-item'>
					<label htmlFor='search destination' className='search-panel__label'>
						Search your destination:
					</label>
					<input type='text' className='search-panel__input' value='Spain' />
				</div>
				<div className='search-panel__box-item'>
					<label htmlFor='select your date' className='search-panel__label'>
						Select your date:
					</label>
					<input
						type='date'
						className='search-panel__input'
						value='2024-07-22'
					/>
				</div>
				<div className='search-panel__box-item'>
					<label htmlFor='price reange' className='search-panel__label'>
						Max price:
					</label>
					<input
						type='range'
						className='search-panel__input'
						max={5000}
						min={1000}
					/>
				</div>
			</div>
		);
}
export default SearchPanel