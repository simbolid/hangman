const { addUser, removeUser, getUser, getUsersInRoom } = require('./users')
const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const cors = require('cors')

const PORT = 8081; 

const app = express()
const server = http.createServer(app);
const io = socketio(server);

app.use(cors())


io.on("connection", socket => {
    socket.on("join", (payload, callback) =>{
        let numberOfUsersInRoom = getUsersInRoom(payload.room).length; 


        const {error, newUser} = addUser({
            id: socket.id,
            name: numberOfUsersInRoom===0 ? 'Player 1' : 'Player 2',
            room: payload.room
        })

        if(error)
            return callback(error)

        socket.join(newUser.room);


        io.to(newUser.room).emit('roomData', {room: newUsers.room, users: getUsersInRoom(newUser.room)})
        socket.emit('currentUser', {name: newUser.name})

        callback(); 
    })


    socket.on('initGameState', gameState => { 
        const user = getUser(socket.id);
        if(user)
            io.to(user.name).emit('updateGameState', gameState)
    })

    socket.on('updateGameState', gameState => {
        const user = getUser(socket.id)
        if(user)
            io.to(user.room).emit('updateGameState', gameState)
    })


    socket.on('disconnect', () => {
        const user = removeUser(socket.id)
        if(user)
            io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)})
    })

    socket.on('message', (payload, callback) => {
        const user = getUser(socket.id)
        io.to(user.room).emit('message', {user: user.name, text: payload.message})
        callback()
    })
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

/*const httpServer = http.createServer(); 
httpServer.listen(webSocketServerPort, () => console.log("Listening on port" +  webSocketServerPort));


const wsServer = new websocketServer({
    "httpServer": httpServer
})
const clients = {}
const rooms = {}
wsServer.on("request", request => {
     //generate a new clientId
    const clientId = guid(); 
    console.log((new Date()) + " Recieved a new connection from the origin " + request.origin);

    //connect 
    const connection = request.accept(null, request.origin);
    clients[clientId] = connection;
    console.log("connected: " + clientId + ' in ' + Object.getOwnPropertyNames(clients));


    //on message handler: 
    connection.on('message', function(message){
        if (message.type == 'utf8'){
            console.log("Recieved Message: ", message.utf8Data); 

            for (key in clients){
                clients[key].sendUTF(message.utf8Data); 
                console.log("sent message to ", clientId); 
            }
        }
    })


    //create room handler
    connection.on('createRoom', function(message){
        if (message.type == 'utf8'){
            console.log("room created", message.utf8Data);
            const roomId = message.utf8Data; 

            rooms.push({id: roomId.id, numUsers: 1, usersInRoom: [roomId.userId]})


          
        }



        
    })

    
    const payload = { 
        "method": "connect",
        "clientId": clientId
    }
    connection.send(JSON.stringify(payload));

})

const addUser = ({id, name, room}) => {
    const numberOfUsersInRoom = room.status; 

    if(numberOfUsersInRoom > 2)
        return { error: 'Room full' }

    const newUser = { id, name, room }
    clients.push(newUser)
    return { newUser }
}





function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
}
 
// then to call it, plus stitch in '4' in the third group
const guid = () => (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();

*/