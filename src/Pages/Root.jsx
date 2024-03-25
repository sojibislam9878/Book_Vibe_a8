import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
    return (
        <div className="container mx-auto p-4">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;