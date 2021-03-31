import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import api from '../../../services/api';
import getValidationErrors from '../../../errors/getValidationErrors';
import { useToast } from '../../../hooks/Toast';
import IOrderDTO from '../../../interfaces/IOrderDTO';
import { actionPt, IAction } from '../../../helpers/action';
import { Container, ButtonsSpot } from './styles';
import ModalMenu from '../../layout/ModalMenu';
import Button from '../../layout/Button';
import Input from '../../layout/Input';

import { FiHash, FiFileText, FiDollarSign, FiKey} from 'react-icons/fi';



interface OrderProps {
  handleClose(): void;
  handleChange(item: IOrderDTO): Promise<void>;
  action: IAction;
  itemToHandle?: IOrderDTO;
}

const Order: React.FC<OrderProps> = ({
  handleClose,
  handleChange,
  action,
  itemToHandle,
}) => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();


  const [labelButton, setLabelButton]= useState('');


useEffect(()=>{
  if (action==='remove'){
    setLabelButton("Excluir")
  }
  if (action==='update'){
    setLabelButton("Atualizar")
  }
  if (action==='create'){
    setLabelButton("Novo")
  }
},[action])

  const handleSubmit = useCallback(
    async ({ id, ...data }: IOrderDTO) => {
      console.log(data)
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          description: Yup.string().required('Nome é obrigatório'),
          quantity: Yup.number()
                      .typeError('Quantidade deve ser um número')
                      .required('Quantidade é obrigatório')
                      .min(1,'Quantidade deve ser maior que zero'),
          value: Yup.number()
                      .typeError('Valor deve ser um número')
                      .required('Valor é obrigatório')
                      .min(1,'Valor deve ser maior que zero'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        let response;
        switch (action) {
          case 'create':
            response = await api.post('/orders', data);
            break;
          case 'update':
            response = await api.put(`/orders/${id}`, data);
            break;
          case 'remove':
            response = await api.delete(`/orders/${id}`);
            break;
          default:
            break;
        }

        addToast({
          type: 'success',
          title: `Ítem ${actionPt(action)}`,
        });

        if (!response) {
          // doesn't need, because try cast protect already
          return;
        }

        handleChange(response.data);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro no processamento do pedido',
          description:
            'Ocorreu um erro no processamento do pedido, confira os dados',
        });
      }
    },
    [addToast, handleChange, action],
  );

  return (
    <Container>
      <ModalMenu onClose={handleClose} title="Pedido">
        <Form ref={formRef} onSubmit={handleSubmit}>
          {action !== 'create' && (
            <div>
              <Input
                name="id"
                placeholder="Id"
                defaultValue={itemToHandle?.id}
                disabled
                icon={FiKey}
              />
            </div>
          )}

          <div>
            <Input
              name="description"
              placeholder="Descrição"
              defaultValue={itemToHandle?.description}
              disabled={action === 'remove'}
              icon={FiFileText}
              />
          </div>

          <div>
            <Input
              name="value"
              placeholder="Valor"
              defaultValue={itemToHandle?.value}
              disabled={action === 'remove'}
              icon={FiDollarSign}
              type="number"
              />
          </div>
          <div>
            <Input
              name="quantity"
              placeholder="Quantidade"
              defaultValue={itemToHandle?.quantity}
              disabled={action === 'remove'}
              icon={FiHash}
              type="number"
              />
          </div>

          <ButtonsSpot>
            <Button type="submit">{labelButton}</Button>
          </ButtonsSpot>
        </Form>
      </ModalMenu>
    </Container>
  );
};

export default Order;
