import { FastifyRequest } from "fastify";
import ListCustomerService from "../services/ListCustomerService";

class ListCustomerController {
  async handle() {
    const listCustomerService = new ListCustomerService();
    const customers = await listCustomerService.execute();

    return customers;
  }
}

export default ListCustomerController;
