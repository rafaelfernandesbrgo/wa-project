import { container } from 'tsyringe';


import IOrderRepository from '@modules/orders/repositories/IOrderRepository';
import OrderRepository from '@modules/orders/infra/typeorm/repositories/OrderRepository';


container.registerSingleton<IOrderRepository>(
    'OrderRepository',
    OrderRepository,
);

