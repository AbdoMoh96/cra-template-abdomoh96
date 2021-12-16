import logo from '../Resources/Pages/HomePage/logos/logo.svg';
import Layout from "../Layout/Layout.jsx";

function ReactPage() {

    return (
        <Layout>
            <div className="logo_container">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <p>
                Edit <code>src/HomePage.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>

        </Layout>
    );
}

export default ReactPage;