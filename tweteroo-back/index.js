import express from 'express'
import cors from'cors'

const server = express();
server.use(express.json());
server.use(cors());

let users= [];
let tweets=[];


server.post('/sign-up', (req,res)=>{
    const {username,avatar}= req.body;
    users.push({username,avatar});    
    
    res.send('OK');
})

server.get('/tweets', (req,res)=>{
    
    function reorganizedTweets(){vgft
        return [...tweets].reverse();
    }

    if(tweets.length <= 10){
        res.send(reorganizedTweets());
    }
})


server.post('/tweets',(req,res)=>{    
    
    const {username,tweet} = req.body;
    const {avatar} = users.find(user=> user.username === username);   
    
    tweets.push({username,tweet,avatar});
    
    res.send('OK');
})


server.listen(5000, ()=>
    console.log('Listening on port 5000'));
