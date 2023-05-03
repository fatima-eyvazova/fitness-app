import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routeNames";
import App from "@/App";
import SignUp from "@/components/SignUp/SignUp";
import SignIn from "@/components/SignIn/SignIn";


const MainRouter = () => {
    return (
        <Routes>
            <Route path={ROUTES.main} element={<App />} />
            <Route path={ROUTES.signUp} element={<SignUp />} />
            <Route path={ROUTES.signin} element={<SignIn />} />
        </Routes>
    )
}

export default MainRouter;