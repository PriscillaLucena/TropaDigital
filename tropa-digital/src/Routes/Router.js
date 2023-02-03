import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { LoginPage } from "../Pages/LoginPage";

export default function Router() {
    return (

        <BrowserRouter>
            <Routes>
                <Route exact path={"/"} element={<LoginPage />} />
                <Route path={"/grid"} element={<HomePage />} />
            </Routes>
        </BrowserRouter>

    )
};