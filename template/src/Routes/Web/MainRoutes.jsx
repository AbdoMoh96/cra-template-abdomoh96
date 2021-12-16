import { Routes , Route , Navigate  } from "react-router-dom";
import HomePage from "../../Pages/HomePage.jsx";
import ReactPage from "../../Pages/ReactPage";
import ReduxPage from "../../Pages/ReduxPage";

const MainRoutes = () => {

    return(
        <Routes>

            <Route path="/" element={<Navigate replace to="/home" />} />

            <Route exact path="/home" element={<HomePage />} />

            <Route exact path="/react" element={<ReactPage />} />

            <Route exact path="/redux" element={<ReduxPage />} />
        </Routes>
    )
}

export default MainRoutes;