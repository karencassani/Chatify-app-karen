import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { socket } from '../socket'
import ManageConnection from './components/ManageConnection'
import MyForm from './components/MyForm'
import Channels from './components/Channels' 

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    const onConnnect = () =>{
      console.log("Conectado")
    }
   // const onDisconnect = () =>{
     // console.log("Conectado")
    //}

    socket.on('connect',onConnect)
    //socket.on('disconnect',onDisconnect)
  },[])

  return (
    <>
    <h1>Chatify</h1>
    <ManageConnection/>
    <MyForm/>
    </>
  )
}

export default App