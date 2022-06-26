import { Route, Routes, useRoutes } from 'react-router-dom'
import { AboutUs } from '../components/AboutUs'
import { Cases } from '../components/Cases'
import { Contact } from '../components/Contact'
import { Index } from '../components/Index'
import { NotFound } from '../components/NotFound'
import { Sites } from '../components/Sites'
import { WebSystems  } from '../components/WebSystems'
import { Games } from '../components/Games'
import { Login } from '../components/Login'
import { User } from '../components/User'
import { Auth } from '../components/Auth'
import { Item } from '../components/Item'

export function AllRoutes() {

    const routes = useRoutes([
        {
            path:'/'
        },
        {
            index: true,
            element: <Index />,
        },
        {
            path:'about-us',
            element:<AboutUs />,

        },
        {
            path:'cases',
            element: <Cases />,
            children: [
                {
                    path: 'sites',
                    element: <Sites />
                },
                {
                    path: 'web-systems',
                    element: <WebSystems />
                },
                {
                    path: 'games',
                    children: [
                        {
                            index:true,
                            element: <Games />
                        },
                        {
                            path: ':slug/:id',
                            element: <Item />
                        }
                    ]
                }
            ]
        },
        {
            path:'contact',
            element: <Contact />
        },
        {
            path: 'user',
            element: <Auth><User /></Auth>,
            //O uso de elementos aninhados aqui nao funcionou com o useRoutes()
        },
        {
            path: 'login',
            element: <Login />,
        },
        {
            path: '*',
            element: <NotFound />
        }
    ])

    return routes
}