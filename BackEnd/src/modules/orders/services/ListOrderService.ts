import { inject, injectable } from 'tsyringe';
import Order from '@modules/orders/infra/typeorm/entities/Order';
import IOrderRepository from '@modules/orders/repositories/IOrderRepository';

@injectable()
class ListOrderService {
    constructor(
        @inject('OrderRepository')
        private orderRepository: IOrderRepository,

    ) {}

    public async execute(): Promise<Order[]> {
        const  order = await this.orderRepository.findAll();
        return order;
    }
}

export default ListOrderService;
