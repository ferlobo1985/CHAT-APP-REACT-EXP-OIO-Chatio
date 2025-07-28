import { useEffect } from "react"
import MainLayout from "./components/mainLayout"

function App() {
 
  // useEffect(()=>{
  //   fetch('http://localhost:5004/')
  //   .then(response=> response.json())
  //   .then(data=> console.log(data))
  // },[])

  return (
    <>
      <MainLayout/>
    </>
  )
}

export default App
