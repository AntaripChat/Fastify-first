import fastify, { FastifyInstance } from "fastify";
import { getUser, postUser } from "./user.controller";

async function userRoute(server:FastifyInstance){

    server.get('/',getUser);
    server.post('/',postUser)

};

export default userRoute;