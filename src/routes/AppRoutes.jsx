import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Layout2 from "../layouts/Layout2";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Dashboard from "../components/admin/adminPage/Dashboard";
import GSTCoursePage from "../pages/GSTCoursePage";
import IncomeTaxCourse from "../pages/IncomeTaxCourse";
import AccountingCourse from "../pages/AccountingCourse";
import TDS from "../pages/TDS";
import CompanyAct from "../pages/CompanyAct";
import Tax from "../pages/Tax";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Updates from "../pages/Updates";
import Accountss from "../pages/Accountss";
import GstAd from "../pages/GstAd";


const AppRoutes = () => {
    const routes = [
        {
            path: "/",
            element: <Layout2 />,
            children: [
                {
                    path: "",
                    element: <Home />,
                },

            ],
        },
        {
            path: "/gst",
            element: <Layout2 />,
            children: [
                {
                    path: "",
                    element: <GSTCoursePage />,
                },

            ],
        },
         {
            path: "/income-tax",
            element: <Layout2 />,
            children: [
                {
                    path: "",
                    element: <IncomeTaxCourse />,
                },

            ],
        },
        {
            path: "/accounting",
            element: <Layout2 />,
            children: [
                {
                    path: "",
                    element: <AccountingCourse />,
                },

            ],
        },
            {
            path: "/accounts",
            element: <Layout2 />,
            children: [
                {
                    path: "",
                    element: <Accountss />,
                },

            ],
        },
              {
            path: "/advance-gst",
            element: <Layout2 />,
            children: [
                {
                    path: "",
                    element: <GstAd />,
                },

            ],
        },
         {
            path: "/tds-and-tcs",
            element: <Layout2 />,
            children: [
                {
                    path: "",
                    element: <TDS />,
                },

            ],
        },
        {
            path: "/company-law",
            element: <Layout2 />,
            children: [
                {
                    path: "",
                    element: <CompanyAct />,
                },

            ],
        },
         {
            path: "/contact",
            element: <Layout2 />,
            children: [
                {
                    path: "",
                    element: <Contact />,
                },

            ],
        },
        {
            path: "/courses",
            element: <Layout2 />,
            children: [
                {
                    path: "",
                    element: <Courses />,
                },

            ],
        },
         {
            path: "/updates",
            element: <Layout2 />,
            children: [
                {
                    path: "",
                    element: <Updates />,
                },

            ],
        },
        {
            path: "/tax-audit",
            element: <Layout2 />,
            children: [
                {
                    path: "",
                    element: <Tax />,
                },

            ],
        },
        {
            path: "/about",
            element: <Layout2 />,
            children: [
                {
                    path: "",
                    element: <About />,
                },

            ],
        },
        
        {
            path: "/login", // 👈 standalone login route
            element: <Login />,
        },
        {
            path: "/signup", // 👈 standalone login route
            element: <Signup />,
        },
        {
            path: "/admin",
            element: <MainLayout />,
            children: [
                {
                    path: "",
                    element: <Dashboard />,
                },
               
            ],
        },
    ];

    return useRoutes(routes);
};

export default AppRoutes;
