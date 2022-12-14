import React from 'react'
import "./leaderBoard.css"

export default function LeaderBoard() {
    let leaderBoard= [{name: "Ilias", score:15},{name: "Daniel", score:10},{name: "Ilias", score:15},{name: "Daniel", score:10}]
    let count = 1; 
  return (
    <div>   
        <div className='leaderBoardContainer'>
            <div className='leaderBoardHeader'>
                <h1 className='leaderBoardTile'>Leader Board</h1>
            </div>
            <div className='leaderBoard'>
                {
                    leaderBoard.map((stat) =>{
                        count++; 
                        if (count % 2 == 0){
                            return (
                                <div className='scoreCard' style={{backgroundColor: "#e0e0e0"}}>
                                <h3 style={{margin: "25px"}}>{stat.name}</h3>
                                <h3 style={{margin: "25px"}}>{stat.score}</h3>
                            </div>
                            ) 
                        }

                        else {
                            return (
                                <div className='scoreCard'  style={{backgroundColor: "#f8f8f8"}}>
                                <h3 style={{margin: "25px"}}>{stat.name}</h3>
                                <h3 style={{margin: "25px"}}>{stat.score}</h3>
                                </div>
                            ) 
                        }

                    }
                        

                    
                    )
                }


            </div>
        </div>
      
    </div>
  )
}
