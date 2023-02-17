import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeRouter from "./components/Home/Router";
import AdminRouter from "./components/Admin/Router";;

function App() {
    return (
        <BrowserRouter basename="api">
            <Routes>
                <Route path="/*" element = {<HomeRouter />} />
                <Route path="/admin/*" element = {<AdminRouter />} />
            </Routes>
        </BrowserRouter>
    );
}

  export default App;