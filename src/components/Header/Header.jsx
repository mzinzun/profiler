import {Link} from 'react-router-dom';
import './Header.css'

function Header(props){
    return(
        <header className="header">
            <div>
                <h1>Michael Zinzun</h1>
                <div className = 'conicHeader'><h2>Software Engineer</h2></div>
            </div>
           
        </header>
    )
}
export default Header;