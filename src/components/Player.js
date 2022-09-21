import './Player.css';


 const Player = ({ label, number, onDeleted, onToggleImportant, onToggleInjured, important, injured, onToggleDefender, onToggleForward, onToggleKeeper, onToggleMidfielder, keeper, defender, midfielder, forward }) =>{


        let classNames = `player`;
        if( injured ){
            classNames += ' injured';
        }
        if( important ){
            classNames += ' important';
        }
        let classes='';
        if( keeper ){
            classes = ' keeper';

        }
         if( defender ){
             classes = ' defender';
         }
         if( midfielder ){
             classes = ' midfielder';
         }
         if( forward ){
             classes  = ' forward';

         }


        return (
            <span className={`${classNames} ${classes}`}>
                <span
                    className='player-label'
                    onClick={ onToggleInjured }
                >
                    { `${number} ${label}` }
                </span>
                 <button type='button'
                         className='btn btn-outline-danger btn-sm  float-right'
                         onClick={ onDeleted }
                 >
                    <i className="fa fa-trash-o"/>
                </button>
                <button type='button'
                        className='btn btn-outline-success btn-sm  float-right'
                        onClick={ onToggleImportant }
                >
                    <i className='fa fa-exclamation'/>
                </button>
                <button type='button'
                        className='btn btn-outline-dark btn-sm  float-right me-5'
                        onClick={ onToggleForward }
                >
                   <i className="fa fa-futbol-o" aria-hidden="true"/>
                </button>
                <button type='button'
                        className='btn btn-outline-dark btn-sm  float-right'
                        onClick={ onToggleMidfielder }
                >
                   <i className="fa fa-male" aria-hidden="true"/>
                </button>
                <button type='button'
                        className='btn btn-outline-dark btn-sm  float-right'
                        onClick={ onToggleDefender }
                >
                   <i className="fa fa-shield" aria-hidden="true"/>
                </button>
                <button type='button'
                        className='btn btn-outline-dark btn-sm  float-right '
                        onClick={ onToggleKeeper }
                >
                   <i className="fa fa-sign-language" aria-hidden="true"/>
                </button>
            </span>

        );

}
export default Player;
