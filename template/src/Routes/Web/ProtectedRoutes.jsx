import React from "react";
import { Routes , Route } from "react-router-dom";
import AccountPage from "../../Pages/AccountPage";
import PublicUserSelector from "../../Redux/Public/Selectors/PublicUserSelector";
import Protected from "../Auth/Protected";

const ProtectedRoutes = () => {

    const User = PublicUserSelector();

    return(
        <Routes>
            <Route exact path="/account" element={
                <Protected auth={User.isLoggedIn}>
                    <AccountPage />
                </Protected>
            }/>

        </Routes>
    )
}

export default ProtectedRoutes;