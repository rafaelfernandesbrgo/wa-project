import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Order from '@modules/orders/infra/typeorm/entities/Order';
import IOrderRepository from '@modules/orders/repositories/IOrderRepository';
import IOrderDTO from '@modules/orders/dtos/IOrderDTO';

@injectable()
class CreateOrderService {
    constructor(
        @inject('OrderRepository')
        private orderRepository: IOrderRepository,


    ) {}

    public async execute(data: IOrderDTO): Promise<Order> {
        const orderExist = await this.orderRepository.findByDescription(data.description);
        if (orderExist) {
            throw new AppError('This order does exist');
        }

        const order = await this.orderRepository.create(data);
        return order;
    }
}

export default CreateOrderService;
