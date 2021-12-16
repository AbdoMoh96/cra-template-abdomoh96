import './scss/style.scss';
import {Link} from "react-router-dom";

function Layout(props) {
    return (
        <div className="App">
            <header className="App-header">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/react">React</Link></li>
                    <li><Link to="/redux">Redux</Link></li>
                    <li><Link to="/account">Account</Link></li>
                </ul>

                {props.children}
            </header>
        </div>
    );
}

export default Layout;
