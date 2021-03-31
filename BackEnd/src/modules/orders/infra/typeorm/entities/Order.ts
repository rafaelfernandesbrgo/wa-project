import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orders')
class Order {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    description: string;

    @Column()
    quantity: number;

    @Column()
    value: number;

}

export default Order;

