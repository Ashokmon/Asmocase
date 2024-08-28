import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    createRoutesFromElements,
} from "react-router-dom";
import Home from '../pages/Home'


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path="/"
                element={<Home/>}
                errorElement={<div>error page</div>}
            >
                <Route
                    path="/about"
                    element={<div>about page</div>}
                    errorElement={<div>error page</div>}
                >
                </Route>

                <Route
                    path="/about"
                    element={<div>about page</div>}
                    errorElement={<div>error page</div>}
                >
                </Route>
            </Route>
        </>

    )
);

const MyRoutes = () => <RouterProvider router={router} />

export default MyRoutes