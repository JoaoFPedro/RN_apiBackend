import prismaClient from "../prisma";

interface DeleteCustomerServiceProps {
  id: string;
}

class DeleteCustomerService {
  async execute({ id }: DeleteCustomerServiceProps) {
    if (!id) {
      throw new Error("Invalid");
    }

    const findCustomerId = await prismaClient.customer.findFirst({
      where: {
        id,
      },
    });

    if (!findCustomerId) {
      throw new Error("Client does not exist");
    }

    await prismaClient.customer.delete({
      where: {
        id: findCustomerId.id,
      },
    });

    return { message: "Customer Deleted" };
  }
}

export default DeleteCustomerService;
