import { Router } from 'express';
import OrderController from '@modules/orders/infra/http/controllers/OrderController';
import { celebrate, Segments, Joi } from 'celebrate';

const ordersRouter = Router();
const orderController = new OrderController();


ordersRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            description: Joi.string().required(),
            value: Joi.number().required(),
            quantity: Joi.number().required(),
        },
    }),
    orderController.create,
);

ordersRouter.get('/', orderController.index);

ordersRouter.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.number().required(),
        },
    }),
    orderController.remove,
);

ordersRouter.put(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.number().required(),
        },
        [Segments.BODY]: {
            description: Joi.string().required(),
            value: Joi.number().required(),
            quantity: Joi.number().required(),
        },
    }),
    orderController.update,
);

export default ordersRouter;
