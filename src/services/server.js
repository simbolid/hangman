const http = require("http");
const websocketServer = require("websocket").server; 
const webSocketServerPort = 8080; 



const httpServer = http.createServer(); 
httpServer.listen(webSocketServerPort, () => console.log("Listening on port" +  webSocketServerPort));


const wsServer = new websocketServer({
    "httpServer": httpServer
})
const clients = {}
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
        if (message.type = 'utf8'){
            console.log("Recieved Message: ", message.utf8Data); 

            for (key in clients){
                clients[key].sendUTF(message.utf8Data); 
                console.log("sent message to ", clientId); 
            }
        }
    })
    const payload = { 
        "method": "connect",
        "clientId": clientId
    }
    connection.send(JSON.stringify(payload));

})


function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
}
 
// then to call it, plus stitch in '4' in the third group
const guid = () => (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
 