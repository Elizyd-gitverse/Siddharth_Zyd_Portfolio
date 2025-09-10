import { useEffect, useRef, useState } from "react";

export default function useInterObsHook() {
    const [isIntersect, setIsIntersect] = useState(false)
    const ref = useRef(null)

    useEffect(function() {  
        const target = ref.current
        if(!target) return;

        function animation(entries)  {
        //  if(isIntersect) return;    
         entries.forEach(entry => {
            setIsIntersect(entry.isIntersecting)
         })
       }

       const obs = new IntersectionObserver(animation, {root: null, threshold: 0})

       obs.observe(target)

       return () => obs.disconnect(target)
     
    }, [isIntersect])

    return {ref, isIntersect}
}