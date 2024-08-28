// 1 import json server 
const jsonServer=require('json-server')








//2 create a server for media app using json-server

const MediaApp= jsonServer.create()

//3 CREATE A MIDDLEWARE USED BY JSON SERVER

const middleware= jsonServer.defaults()


//4 route for db.json

const route = jsonServer.router('db.json')

//5 set up a port for running server

const PORT =3000 || process.env.PORT

//6 FINAL SETUP

MediaApp.use(middleware)
MediaApp.use(route)

//run the server
MediaApp.listen(PORT,()=>{
    console.log('media server running on port'+ PORT);
    
})
