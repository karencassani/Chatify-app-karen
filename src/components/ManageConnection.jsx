import React from 'react'
import { socket } from '../../socket'



function ManageConnection() {

    const handelConnection  = (con) =>{
        switch(con){
            case'on':
            socket.on('connect', onConnect)
            break
        case 'off':
            socket.on('disconnect', onDisconnect)
            break
        default:
            break
        }
    }

return (
    <div>
        <button onClick={()=> handleConnection('on')}> Conection</button>
         <button onClick={()=> handelConnection('off')}> Conection</button>
 
    </div>



    )
}

export default ManageConnection