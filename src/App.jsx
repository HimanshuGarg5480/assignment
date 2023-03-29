import Aviate_Dashboard from "./Pages/Aviate_Dashboard"
import { RouterProvider,createBrowserRouter,Outlet } from "react-router-dom"
import JobsPortal from "./Pages/JobsPortal";

function App() {
  return (
    <>
    <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Aviate_Dashboard />,
      },
      {
        path: "/jobsportal",
        element: <JobsPortal/>,
      }
    ],
  },
]);

function Routerprovider(){
  return (
    <RouterProvider router={router}/>
  )
}

export default Routerprovider
