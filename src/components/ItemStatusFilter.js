import './ItemStatusFilter.css';


const ItemStatusFilter =({filter, onFilterChange }) =>{
    const btns = [
        { name: 'all', label: 'All' },
        { name: 'keeper', label: 'Keeper' },
        { name: 'defender', label: 'Defender' },
        { name: 'midfielder', label: 'Midfielder' },
        { name: 'forward', label: 'Forward' },
    ]


         const buttons = btns.map(({ name, label}) =>{
            const isActive = filter === name;
            const clazz = isActive ? 'btn-danger' : 'btn-outline-dark';
            return  <button
                        type='button'
                        className={ `btn ${ clazz }` }
                        key={ name }
                        onClick={() => onFilterChange( name )}
                    >
                        { label }
                    </button>
        })
        return(
            <div className='btn-group'>
                { buttons }
            </div>
            )


}
export default ItemStatusFilter;
