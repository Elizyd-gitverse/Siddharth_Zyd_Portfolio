
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Academic from "./Component/AcadmeicScreen/Academic";
import HomeScreen from "./Component/HomeScreen/Home";
import Project from "./Component/ProjectScreen/Project";
import AppLayout from "./AppLayout";
import Error from "./ui/Error";

//REACT-ROUTER 
const router = createBrowserRouter([
  {    
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element:<HomeScreen />
      },
      {
        path: '/academic',
        element: <Academic />
      },
      {
        path: '/projects',
        element: <Project />
      }
    ]
  }
])


export default function App() {
  return <RouterProvider router={router}/>

  //scroll type👇
  // return (
  //     <div>
  //        <NavBar />
  //        <HomeScreen />
  //        <Academic />
  //        <Project />
  //        <Contact/>
  //     </div>
  // )
}
