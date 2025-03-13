import app from './app';
import userRoute from './modules/users/user.route';


app.register(userRoute,{prefix:'/api'});

app.get('/',async(req,reply)=>{
    return reply.send('Hello');
});

async function server(){

    try{
        await app.listen({port:5000},()=>{
            console.log(`App running on ${5000}`);
        })
    
    }catch(err){
        console.error(err);
    }
};

server();