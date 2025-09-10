import { Outlet } from "react-router-dom";
import NavBar from "./Component/NavBar/NavBar";
import Contact from "./Component/Contact/Contact";

export default function AppLayout() {
    
    return (
        <>
         <NavBar />

         <main>
            <Outlet />
         </main>

         <Contact />
        </>
    )
}