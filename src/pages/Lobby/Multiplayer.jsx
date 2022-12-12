import React, { useState } from 'react'

export default function Multiplayer({socket, username, room}) {
    const [done, setDone] = useState(false); 


  const sendEndgame = async() => { 
    if (done ){ 
        const data = { 
            room: room, 
            author: username, 
            message: "Game over", 
        }

        await socket.emit('end_game', data); 
        
    }
  }
  return (
    <div>
        <button onClick={() => setDone(true)}> set Done true</button>
      <button onClick={() => sendEndgame}>Send </button>
    </div>
  )
}
