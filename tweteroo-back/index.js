import express from 'express'
import cors from'cors'

const server = express();
server.use(express.json());
server.use(cors());

let users= [];

server.post('/sign-up', (req,res)=>{
    const idUser = users.length;
    const newUser ={id: idUser, ...req.body};
    users.push(newUser);
    console.log(users);
})


server.listen(5000, ()=>
    console.log('Listening on port 5000'));
