import { getRepository, Not, Repository } from 'typeorm';
import Order from '@modules/orders/infra/typeorm/entities/Order';
import IOrderDTO from '@modules/orders/dtos/IOrderDTO';
import IOrderRepository from '@modules/orders/repositories/IOrderRepository';

class OrderRepository implements IOrderRepository {
    private ormRepository: Repository<Order>;

    constructor() {
        this.ormRepository = getRepository(Order);
    }

    public async create(data: IOrderDTO): Promise<Order> {
        const order = this.ormRepository.create( data );
        await this.ormRepository.save(order);
        return order;
    }

    public async remove(id: number): Promise<Order | undefined> {
        const order = await this.ormRepository.findOne(id);
        if (order) {
            await this.ormRepository.delete(id);
            return order;
        }
        return undefined;
    }

    public async update(data: IOrderDTO, id: number): Promise<Order | undefined> {
        const order = await this.ormRepository.findOne(id);
        if (order) {
            await this.ormRepository.update(id, data);
            const orderUpdated = await this.ormRepository.findOne(id);
            return orderUpdated;
        }
        return undefined;
    }

    public async findAll(): Promise<Order[]> {
        const orders = await this.ormRepository.find({ order: { id: 'ASC' } });
        return orders;
    }

    public async findByDescription(description: string): Promise<Order | undefined> {
        const order = await this.ormRepository.findOne({ where: { description } });
        return order;
    }

    public async findByOtherDescription(
        description: string,
        notId: number,
    ): Promise<Order | undefined> {
        const order = await this.ormRepository.findOne({
            where: {
                description,
                id: Not(notId),
            },
        });
        return order;
    }

    public async findById(id: number): Promise<Order | undefined> {
        const order = await this.ormRepository.findOne(id);
        return order;
    }
}

export default OrderRepository;
