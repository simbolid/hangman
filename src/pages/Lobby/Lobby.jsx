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
       <div>
      {user ?
        <button onClick={() => onButtonClick("Hello!")}>send button</button>
        : 
        <div style={{padding : '200px 40px'}}>
        <Search
          placeholder='Enter Game'
          size="large"
          onSearch={() => onButtonClick("Login")}
          />
          </div>
      }
      </div>
    </div>
  )
}
