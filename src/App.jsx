import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const[shariq, setshariq] = useState()
  const [counter, setCounter] = useState(0)
  const [themechanger , setthemechanger] = useState(false)


  async function callingApis(){
    const callingApi = await fetch("https://api.adviceslip.com/advice")

    const res = await callingApi.json()
    console.log(res.slip.advice);
   setshariq(res.slip.advice)
}
function btHandler(){

  setCounter(counter + 1)
  
  setthemechanger(!themechanger)
}


  useEffect(()=>{
    callingApis()
  },[])
  
  
  
  return (
    
    <div style={{
      backgroundColor :themechanger? 'black' : "white",
       color: themechanger? "white" : "black",
       width: "100vw",
       height: "100vh",
       textAlign : "center",
       alignContent: "center"
       }}>
      <h1>{shariq}</h1>
      <button onClick={btHandler}>click me</button>
      <p> You have read {counter} time</p>
    </div>

  )
}

export default App
