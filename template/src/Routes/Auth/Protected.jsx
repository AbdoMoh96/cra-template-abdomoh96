import { Navigate } from "react-router-dom"


function Protected({auth, children }) {
    return auth ? children : <Navigate to="/login" />;
}
export default Protected