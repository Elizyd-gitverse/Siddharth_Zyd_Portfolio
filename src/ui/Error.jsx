import { Link, useRouteError } from "react-router-dom"

export default function Error() {
   const error = useRouteError()
   console.log(error)

   return (
   <div style={{padding: '4rem'}}>
      <h1 style={{color: 'red', padding: '1rem'}}>{error.data || 'No Such Path Found'}</h1>
      <h2><Link to='/'> &larr;Go Back To Home Page</Link></h2>
   </div>
   )
}