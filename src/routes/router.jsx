import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import SellerLayout from "../layouts/SellerLayout";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
   
    {
        path: "/",
        element: <MainLayout/>
    },
    {
        path: "/admin",
        element: <AdminLayout/>
    },
    {
        path: "/seller",
        element: <SellerLayout/>
    },
     {
        path: "*",
        element: <NotFound/>
    }
])