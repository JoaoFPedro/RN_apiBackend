import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import CreateCustomerController from "./controller/CreateaCustomerController";
import ListCustomerController from "./controller/ListCustomerController";

export async function routes (fastify: FastifyInstance, options: FastifyPluginOptions){
    
    fastify.get('/teste', async (request: FastifyRequest, reply: FastifyReply) => {
        return {
            ok: true
        }
    })
    fastify.post('/customer', async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply)
    })

    fastify.get('/listCustomer', async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomerController().handle()
    })
}