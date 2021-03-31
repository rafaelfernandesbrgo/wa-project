import {getConnection, MigrationInterface, QueryRunner, Table} from "typeorm";
import Order from "@modules/orders/infra/typeorm/entities/Order";

export default class CreateOrder1617192778039 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'orders',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                    },
                    {
                        name: 'quantity',
                        type: 'int',
                    },
                    {
                        name: 'value',
                        type: 'decimal',
                        precision: 18,
                        scale: 2
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orders');
    }
}
