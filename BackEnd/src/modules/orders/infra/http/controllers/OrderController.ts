import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateOrderService from '@modules/orders/services/CreateOrderService';
import RemoveOrderService from '@modules/orders/services/RemoveOrderService';
import UpdateOrderService from '@modules/orders/services/UpdateOrderService';
import ListOrderService from '@modules/orders/services/ListOrderService';
import IOrderDTO from '@modules/orders/dtos/IOrderDTO';



export default class OrderController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const data: IOrderDTO = request.body;
        const createOrderService = container.resolve(CreateOrderService);
        const order = await createOrderService.execute(data);
        return response.json(order);
    }

    public async remove(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { id } = request.params;
        const removeOrderService = container.resolve(RemoveOrderService);
        const order = await removeOrderService.execute(Number(id));
        return response.json(order);
    }

    public async update(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const data: IOrderDTO = request.body;
        const { id } = request.params;
        const updateOrderService = container.resolve(UpdateOrderService);
        const order = await updateOrderService.execute(data, Number(id));
        return response.json(order);
    }

    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const listOrderService = container.resolve(ListOrderService);
        const order = await listOrderService.execute();
        return response.json(order);
    }
}
