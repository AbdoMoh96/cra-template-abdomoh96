import React,{useEffect , useState} from "react";
import logo from '../Resources/Pages/HomePage/logos/logo.svg';
import reduxLogo from '../Resources/Pages/HomePage/logos/redux.png';
import Layout from "../Layout/Layout.jsx";
import {useDispatch} from "react-redux";
import PublicCountAction from "../Redux/Public/Actions/PublicCountAction";
import HomeTextAction from "../Redux/HomePage/Actions/HomeTextAction";
import PublicCountSelector from "../Redux/Public/Selectors/PublicCountSelector";
import HomeTextSelector from "../Redux/HomePage/Selectors/HomeTextSelector";

function HomePage() {

    const [flip , flipUpdate] = useState(true);
    let num = PublicCountSelector();
    let text = HomeTextSelector();

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('mounted');
    } , [])

  return (
      <Layout>
        <div className="logo_container">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={reduxLogo} className="App-logo redux-logo" alt="logo" />
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
          React, Redux, React_router, Layouts.
        </a>

        <a
            className="App-link"
            href="https://github.com/AbdoMoh96"
            target="_blank"
            rel="noopener noreferrer"
        >
          My GitHub ({text}) {num}
        </a>

          <button onClick={(event) => {
              if(flip){
                  flipUpdate(false);
                  return dispatch(HomeTextAction('url'));
              }else{
                  flipUpdate(true)
                  return dispatch(HomeTextAction('name'));
              }
          }}>Change Text</button>

          <button onClick={(event) => {
              return dispatch(PublicCountAction('increment'));
          }}>+</button>

          <button onClick={(event) => {
              return dispatch(PublicCountAction('decrement'));
          }}>-</button>
      </Layout>
  );
}

export default HomePage;