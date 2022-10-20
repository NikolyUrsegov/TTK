import React from 'react';
import {Info} from "./info/Info";
import {Nav} from "./nav/Nav";

export const Header = () => {
    return (
        <div>
            <div>
                <Info/>
                <Nav/>
            </div>
        </div>
);
};

