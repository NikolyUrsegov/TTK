import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Main} from "../../main/Main";
import Catalog from "../../Pages/Catalog/Catalog";
import {Brand} from "../../Pages/Brand/Brand";

export const RoutesPage = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Main/>}/>
            <Route path={'/catalog'} element={<Catalog/>}/>
            <Route path={'/catalog/:sort'} element={<Catalog/>}/>
            <Route path={'/delivery'} element={<h1>delivery</h1>}/>
            <Route path={'/about'} element={<h1>about</h1>}/>
            <Route path={'/contacts'} element={<h1>contacts</h1>}/>
            <Route path={'/brand/:brand'} element={<Brand/>}/>
        </Routes>
    );
};

