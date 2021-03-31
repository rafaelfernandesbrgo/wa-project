import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Order from '@modules/orders/infra/typeorm/entities/Order';
import IOrderRepository from '@modules/orders/repositories/IOrderRepository';

@injectable()
class RemoveOrderService {
    constructor(
        @inject('OrderRepository')
        private orderRepository: IOrderRepository,

    ) {}

    public async execute(id: number): Promise<Order> {
        const orderRemoved = await this.orderRepository.remove(id);
        if (!orderRemoved) {
            throw new AppError('This order does not exist');
        }
        return orderRemoved;
    }
}

export default RemoveOrderService;
