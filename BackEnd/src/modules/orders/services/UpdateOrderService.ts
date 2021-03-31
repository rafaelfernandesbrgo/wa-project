import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Order from '@modules/orders/infra/typeorm/entities/Order';
import IOrderRepository from '@modules/orders/repositories/IOrderRepository';
import IOrderDTO from '@modules/orders/dtos/IOrderDTO';

@injectable()
class UpdateOrderService {
    constructor(
        @inject('OrderRepository')
        private orderRepository: IOrderRepository,

    ) {}

    public async execute(data: IOrderDTO, id: number): Promise<Order> {
        const orderRepeted = await this.orderRepository.findByOtherDescription(data.description, id);
        if (orderRepeted) {
            throw new AppError('This description already used by other order');
        }

        const orderUpdated = await this.orderRepository.update(data, id);
        if (!orderUpdated) {
            throw new AppError('This order does not exist');
        }

        return orderUpdated;
    }
}

export default UpdateOrderService;
