import { useEffect } from "react"

function App() {
 
  useEffect(()=>{
    fetch('http://localhost:5004/')
    .then(response=> response.json())
    .then(data=> console.log(data))
  },[])

  return (
    <>
      HELLO
    </>
  )
}

export default App
