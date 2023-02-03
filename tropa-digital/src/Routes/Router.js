import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GridPage } from "../Pages/GridPage";
import { HomePage } from "../Pages/HomePage";

export default function Router() {
    return (

        <BrowserRouter>
            <Routes>
                <Route exact path={"/"} element={<HomePage />} />
                <Route path={"/grid"} element={<GridPage />} />
            </Routes>
        </BrowserRouter>

    )
};