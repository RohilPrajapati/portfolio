import React from 'react';
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const  MainLayout = ()  => {
    return (
        <>
            <NavBar />
            <div className="mt-16 md:mt-16">
                <Outlet />
            </div>
        </>
    );
}

export default MainLayout;