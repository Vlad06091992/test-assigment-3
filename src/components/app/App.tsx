import React from 'react';
import './App.css';
import {Login} from "features/login/Login";
import {PrivatePage} from "components/privatePage/PrivatePage";
import {createHashRouter, RouterProvider} from "react-router-dom";

const router = createHashRouter([
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/private-page',
        element: <PrivatePage/>
    }, {
        path: '*',
        element: <Login/>
    },
])


function App() {
    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
