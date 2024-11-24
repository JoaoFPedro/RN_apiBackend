import prismaClient from "../prisma";

class ListCustomerService {
    async execute(){
        const customers = prismaClient.customer.findMany()

        return customers
    }

    
}

export default ListCustomerService