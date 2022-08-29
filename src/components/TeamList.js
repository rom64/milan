import Player from "./Player";

import './TeamList.css';

const TeamList = ({ data, onDeleted, onToggleImportant, onToggleInjured, onToggleDefender, onToggleForward, onToggleKeeper, onToggleMidfielder }) =>{
    return(
        <ul className='list-group team-list'>
            { data.map( item =>{
                const { id, ...itemProps } = item;
                return(
                <li key={ id } className='list-group-item'>
                    <Player
                        { ...itemProps}
                        onDeleted={() =>onDeleted(id)}
                        onToggleImportant={()=>onToggleImportant(id)}
                        onToggleInjured={()=>onToggleInjured(id)}
                        onToggleKeeper={()=>{onToggleKeeper(id)}}
                        onToggleDefender={()=>{onToggleDefender(id)}}
                        onToggleMidfielder={()=>{onToggleMidfielder(id)}}
                        onToggleForward={()=>{onToggleForward(id)}}
                    />
                </li>
                )

            })}
        </ul>
    );
}
export default TeamList;