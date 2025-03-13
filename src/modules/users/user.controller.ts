import { FastifyReply, FastifyRequest } from "fastify";


export async function getUser (req:FastifyRequest,reply:FastifyReply){
    return reply.send('Hello user');
};

export async function postUser(req:FastifyRequest,reply:FastifyReply){
    const data:any = req.body;
    reply.send(`Helllo ${data.name}`)
}



