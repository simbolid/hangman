import React, { useState, useEffect } from 'react'
import Search from 'antd/es/transfer/search';


export default function Lobby({client}) {

    const [user, setUser] = useState('');
    const [isLogedIn, login] = useState(false);
   
  
    const onButtonClick = (message) => { 
      client.send(JSON.stringify({
        type: "message",
        value: message
      }))
    }
   
    function setState(value){
      login(true)
      setUser(value)
      console.log("You are logged in");
    }
  return (
    <div>
        <h1>
            Enter or create game room
        </h1>
       <div>
        <button>Create Game Room</button>
      
        <button onClick={() => onButtonClick("Hello!")}>send button</button>
    
        
      </div>
    </div>
  )
}
