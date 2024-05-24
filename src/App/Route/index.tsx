// import Layout from "../Layout";
import { ApiKeyView } from "../View/ApiKey";
import { Category } from "../View/Ecommerce/Category";
import ClientView from "../View/Client";
import Customar from "../View/Customar";
import Home from "../View/Home";
import { PostPage } from "../View/Post";
import { RepotePost } from "../View/Post/RepotePost";
import ProductScreen from "../View/Ecommerce/Product";
import { Comminction } from "../View/Settings";
import { SubCategory } from "../View/Ecommerce/SubCategory";
import type { RoutesData } from "../lib/DataSet/Global";

const RoutesList: RoutesData[] = [
    {
        path: '',
        name: 'Home',
        type: 'PRENT',
        icon: (<i className="fe-home" />),
        element: <Home />,
        role: "All",
        children: [
            {
                path: '',
                name: "DashBoard",
                type: "SUBCHILDREN",
                role: 'All',
                element: <Home />,
                url: '/dashboad',
                children: []
            }
        ]
    },
    {
        path: 'client',
        name: 'Client',
        type: 'PRENT',
        role: 'Admin',
        icon: <i className="fas fa-users-cog" />,
        children: [
            {
                path: '',
                url: '/dashboad/client',
                name: "Manage Client",
                type: "SUBCHILDREN",
                role: 'Admin',
                element: <ClientView />,
                children: []
            }
        ]
    },
    {
        path: 'customar',
        name: 'Customar',
        type: 'PRENT',
        role: 'Client',
        icon: <i className="fas fa-users-cog" />,
        children: [
            {
                path: '',
                url: '/dashboad/customar',
                name: "Manage Customar",
                type: "CHILDREN",
                role: 'Client',
                element: <Customar />,
                children: []
            }
        ]
    },
    {
        path: 'ecommerce',
        name: "E-Commerce",
        type: "PRENT",
        role: "All",
        icon: <i className="fas fa-solid fa-store"></i>,
        children: [
            {
                path: 'category',
                url: '/dashboad/ecommerce/category',
                name: "Manage Category",
                type: "CHILDREN",
                role: 'All',
                element: <Category />,
                children: []
            },
            {
                path: 'subCategory',
                url: '/dashboad/ecommerce/subCategory',
                name: "Manage SubCategory",
                type: "CHILDREN",
                role: 'All',
                element: <SubCategory />,
                children: []
            },
            {
                path: 'products',
                url: '/dashboad/ecommerce/products',
                name: "Products",
                type: "CHILDREN",
                role: 'All',
                element: <ProductScreen />,
                children: []
            }
        ]
    },
    {
        path: 'post',
        name: 'Post',
        type: 'PRENT',
        role: 'All',
        icon: <i className="fas fa-camera-retro" />,
        children: [
            {
                path: '',
                url: '/dashboad/post',
                name: "Manage Post",
                type: "CHILDREN",
                role: 'Client',
                element: <PostPage />,
                children: []
            },
            {
                path: 'report',
                url: '/dashboad/post/report',
                name: "Report Post",
                type: "CHILDREN",
                role: 'Client',
                element: <RepotePost />,
                children: []
            }
        ]
    },
    {
        name: 'Subscriptions',
        path: 'subscriptions',
        type: 'PRENT',
        icon: <i className="fas fa-store font-21" />,
        role: 'Admin',
        children: [
            {
                name: 'Manage Subscriptions',
                path: '',
                element: <></>,
                type: 'PRENT',
                role: 'Admin',
                url: '/dashboad/subscriptions',
                children: []
            }
        ],

    },
    {
        path: 'settings',
        name: 'Settings',
        type: 'PRENT',
        role: 'Client',
        icon: <i className="fe-settings font-22" />,
        children: [
            {
                name: 'APi Key',
                path: '',
                type: 'CHILDREN',
                element: <ApiKeyView />,
                children: [],
                icon: <i className="fas fa-key" />,
                role: "Client",
                url: '/dashboad/settings'
            },
            {
                name: 'Comminction',
                path: 'comminction',
                children: [],
                type: 'CHILDREN',
                element: <Comminction />,
                role: 'Client',
                url: '/dashboad/settings/comminction'
            }
        ]
    }
]

export default RoutesList;