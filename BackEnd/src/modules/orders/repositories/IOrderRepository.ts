import Order from '@modules/orders/infra/typeorm/entities/Order';
import IOrderDTO from '@modules/orders/dtos/IOrderDTO';

export default interface IOrdersRepository {
    create(data: IOrderDTO): Promise<Order>;
    remove(id: number): Promise<Order | undefined>;
    update(data: IOrderDTO, id: number): Promise<Order | undefined>;
    findAll(): Promise<Order[]>;
    findById(id: number): Promise<Order | undefined>;
    findByOtherDescription(description: string, notId: number): Promise<Order | undefined>;
    findByDescription(description: string): Promise<Order | undefined>;
}
