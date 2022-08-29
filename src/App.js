import { useState } from 'react';

import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import TeamList from "./components/TeamList";
import ItemStatusFilter from "./components/ItemStatusFilter";
import ItemAddForm from "./components/ItemAddForm";

import './App.css';


const App = () => {
    const [players, setPlayers] = useState([
        { label:'Mike Maignan', important: true, injured: false, keeper: true, defender: false, midfielder: false, forward: false, id: 1 } ,
        { label:'Davide Calabria', important: true, injured: false, keeper: false, defender: true, midfielder: false, forward: false, id: 2 } ,
        { label:'Zlatan Ibrahimovic', important: true, injured: false, keeper: false, defender: false, midfielder: false, forward: true, id: 3 } ,
        { label:'Sandro Tonali', important: true, injured: false, keeper: false, defender: false, midfielder: true, forward: false, id: 4 } ,
        { label:'Rade Krunic', important: false, injured: false, keeper: false, defender: false, midfielder: false, forward: false, id: 5 } ,
         ]);

    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('all');

    const createPlayer = ( label ) => {
        return {
            label,
            important:  false,
            injured:    false,
            keeper:     false,
            defender:   false,
            midfielder: false,
            forward:    false,
            id:         players.length + 1
        }
    }
    const deleteItem = ( id ) => {
        const newArr = players.filter( item => item.id !== id );
        setPlayers( newArr );
    }
    const addItem = ( text ) => {
        const newItem = createPlayer( text );
        const newData = [...players, newItem];
        setPlayers( newData );

    }
    const toggleProperty = ( arr, id, property ) => {
        const idx = arr.findIndex( el => el.id === id );
        const oldItem = arr[idx];
        let newItem;
        if(property === 'important' || property === 'injured'){
            newItem = {...oldItem,   [property]: !oldItem[property]};
        }else{
            newItem = {...oldItem, keeper: false, defender: false, midfielder: false, forward: false,  [property]: !oldItem[property]};
        }


        return [
            ...arr.slice( 0, idx ),
            newItem,
            ...arr.slice( idx + 1 )
        ]

    }
    const onToggleImportant = ( id ) => {
        setPlayers( toggleProperty( players, id, 'important' ));

    }
    const onToggleInjured = id => {
        setPlayers( toggleProperty( players, id, 'injured' ));

    }
    const onToggleKeeper = id =>{
        setPlayers( toggleProperty( players, id, 'keeper' ));
    }
    const onToggleDefender  = id =>{
        setPlayers( toggleProperty( players, id, 'defender' ));
    }
    const onToggleMidfielder = id =>{
        setPlayers( toggleProperty( players, id, 'midfielder' ));
    }
    const onToggleForward = id =>{
        setPlayers( toggleProperty( players, id, 'forward' ));
    }
    const search = ( items, term ) => {
        if ( term.length === 0 ) {
            return items;
        }
        return items.filter( item => {
            return item.label.toLowerCase().indexOf( term.toLowerCase()) > -1;
        })
    }
    const filterHandler = ( items, filter ) => {
        switch ( filter ) {
            case "all" :
                return items;
            case 'keeper' :
                return items.filter( item => item.keeper );
            case 'midfielder' :
                return items.filter( item => item.midfielder );
            case 'defender' :
                return items.filter( item => item.defender );
            case 'forward' :
                return items.filter( item => item.forward );
            default:
                return items;
        }
    }
    const onFilterChange = filter  => {
        setFilter( filter );
    }
    const onSearchChange = term => {
        setTerm( term );
    }



    const visibleItems = filterHandler( search( players, term ), filter );
    const injured = players.filter( el => el.injured ).length;



    return (
        <div className="team-app">
            <AppHeader total={ players.length } injured={ injured }/>
            <div className='top-panel d-flex'>
                <SearchPanel onSearchChange={ onSearchChange }/>
                <ItemStatusFilter
                    filter={ filter }
                    onFilterChange={ onFilterChange }
                />
            </div>
            <TeamList data={ visibleItems }
                      onDeleted={ deleteItem }
                      onToggleImportant={ onToggleImportant }
                      onToggleInjured={ onToggleInjured }
                      onToggleKeeper={ onToggleKeeper }
                      onToggleDefender={ onToggleDefender }
                      onToggleMidfielder={ onToggleMidfielder }
                      onToggleForward={ onToggleForward }

            />
            <ItemAddForm onAdded={ addItem } />
        </div>
    );
}
export default App;


