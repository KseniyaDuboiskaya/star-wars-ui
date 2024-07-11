import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import { ErrorPage } from "./common/components";
import { CharacterListContainer } from "./modules/characterList/CharacterListContainer";
import { CharacterContainer } from "./modules/character/CharacterContainer.tsx";
import { App } from "./App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Navigate to="character-list" />
            },
            {
                path: "character-list",
                element: <CharacterListContainer />
            },
            {
                path: 'character/:id',
                element: <CharacterContainer />
            }
        ]
    },

]);

const routerProvider = <RouterProvider router={router} />

export { routerProvider }