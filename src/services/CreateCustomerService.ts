import prismaClient from "../prisma"

interface CreateCustomerServiceProps{
    name: string
    email: string
}
class CreateCustomerService {
    async execute({name, email}: CreateCustomerServiceProps) {

        if(!name || !email){
            throw new Error("Fill all the mandatory fields")
        }
        const customer = await prismaClient.customer.create({
            data:{
                name,
                email,
                status: true
            }
        })

        console.log('ROTA FOI CHAMADA')

        return customer
    }
}

export {CreateCustomerService}