import reduxLogo from '../Resources/Pages/HomePage/logos/redux.png';
import Layout from "../Layout/Layout.jsx";

function ReduxPage() {

    return (
        <Layout>
            <div className="logo_container">
                <img src={reduxLogo} className="App-logo redux-logo" alt="logo" />
            </div>
            <p>
                Edit <code>src/HomePage.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn Redux
            </a>

        </Layout>
    );
}

export default ReduxPage;