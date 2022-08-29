import './AppHeader.css';

const AppHeader = ({total, injured}) =>{
    return (
        <div className='app-header d-flex'>
            <h1>AC Milan</h1>
            <h2>{total} total number of players , {injured} injured </h2>
        </div>

    )
}
export default AppHeader;