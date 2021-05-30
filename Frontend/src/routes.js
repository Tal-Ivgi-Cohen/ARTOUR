import { Home } from './pages/util/Home.jsx';
import { About } from './pages/util/About.jsx';
import { ArtApp } from './pages/art/ArtApp.jsx';
import { ArtEdit } from './pages/art/ArtEdit.jsx';
import { ArtDetails } from './pages/art/ArtDetails.jsx';
import { ArtAdd } from './pages/art/ArtAdd.jsx';
import { Account } from './pages/user/Account.jsx';


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
        path: '/art/edit/:artId',
        component: ArtEdit,
    },
    {
        path: '/art/add',
        component: ArtAdd,
    },
    {
        path: '/art/:artId',
        component: ArtDetails,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/account',
        component: Account
    }
];