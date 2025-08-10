
import Academic from "./Component/AcadmeicScreen/Academic";
import Contact from "./Component/Contact/Contact";
import HomeScreen from "./Component/HomeScreen/Home";
import NavBar from "./Component/NavBar/NavBar";
import Project from "./Component/ProjectScreen/Project";
import useInterObsHook from "./Hooks/useInterObsHook";


export default function App() {
  const {ref, isIntersect} = useInterObsHook()
  
  return (
      <div>
         <NavBar isIntersect={!isIntersect}/>
         <HomeScreen ref={ref}/>
         <Academic />
         <Project />
         <Contact/>
      </div>
  )
}
