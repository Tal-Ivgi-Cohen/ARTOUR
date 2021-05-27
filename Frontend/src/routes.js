import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { ArtApp } from './pages/ArtApp.jsx'
import { ArtEdit } from './pages/ArtEdit.jsx'
import { ArtDetails } from './pages/ArtDetails.jsx'


export const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/art',
        component: ArtApp,
    },
    {
        path: '/art/:artId',
        component: ArtDetails,
    },
    {
        path: '/art/edit/:artId',
        component:ArtEdit,
    },
    {
        path: '/art/edit',
        component: ArtEdit,
    },
    {
        path: '/about',
        component: About,
    }
]