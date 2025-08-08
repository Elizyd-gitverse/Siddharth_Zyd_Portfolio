import { useState } from "react";
import Academic from "./Component/AcadmeicScreen/Academic";
import Contact from "./Component/Contact/Contact";
import HomeScreen from "./Component/HomeScreen/Home";
import NavBar from "./Component/NavBar/NavBar";
import Project from "./Component/ProjectScreen/Project";

export default function App() {
   const [isIntersect, setIsIntersect] = useState(false)

  return (
      <div>
         <NavBar isIntersect={isIntersect}/>
         <HomeScreen setIsIntersect={setIsIntersect} isIntersect={isIntersect}/>
         <Academic />
         <Project />
         <Contact/>
      </div>
  )
}
