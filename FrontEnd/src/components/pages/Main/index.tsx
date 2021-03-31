import React, { useCallback, useEffect, useState } from 'react';
import {
  BackGround,
  Logo,
  Container,
  Header,
  Screen,
  Footer,
} from './styles';
import MenuOrder from '../Order';
import IOrderDTO from '../../../interfaces/IOrderDTO';
import ButtonIcon from '../../layout/ButtonIcon';
import iconEdit from '../../../assets/edit.svg';
import iconTrash from '../../../assets/trash.svg';
import LogoImg from '../../../assets/logo.png';
import api from '../../../services/api';
import { IAction } from '../../../helpers/action';
import TableCustomized from '../../layout/TableCustomized';
import Button from '../../layout/Button';

const Main:React.FC = () => {

  const [dataTable, setdataTable] = useState<IOrderDTO[]>([]);
  const [action, setAction] = useState<IAction>('create');
  const [itemToHandle, setItemToHandle] = useState<IOrderDTO | undefined>();

  const [showMenuOrder, setShowMenuOrder] = useState(false);
  const handleShowMenuOrder = useCallback(
    (actionParms: IAction, item: IOrderDTO | undefined) => {
      setItemToHandle(item);
      setAction(actionParms);
      setShowMenuOrder(true);
    },
    [],
  );
  const handleCloseMenuOrder = useCallback(() => {
    setShowMenuOrder(false);
  }, []);


  useEffect(() => {
    async function loadData(): Promise<void> {
      const response = await api.get('orders');
      setdataTable(response.data);
    }
    loadData();
  }, []);


  const handleChange = useCallback(
    async (itemChanged: IOrderDTO) => {
      if (action === 'create') {
        setdataTable([...dataTable, itemChanged]);
      }
      if (action === 'update') {
        setdataTable(
          dataTable.map(item => {
            if (item.id === itemChanged.id) {
              return itemChanged;
            }
            return item;
          }),
        );
      }
      if (action === 'remove') {
        setdataTable(dataTable.filter(item => item.id !== itemChanged.id));
      }
      handleCloseMenuOrder();
    },
    [dataTable, handleCloseMenuOrder, action],
  );


  return (
    <Container>
      <Logo src= {LogoImg} />
      <BackGround>
        {showMenuOrder && itemToHandle && (
            <MenuOrder
              handleClose={handleCloseMenuOrder}
              handleChange={handleChange}
              action={action}
              itemToHandle={itemToHandle}
            />
          )}
        {showMenuOrder && !itemToHandle && (
        <MenuOrder
          handleClose={handleCloseMenuOrder}
          handleChange={handleChange}
          action={action}
        />
      )}

      <Screen>
          < Header>
            < h1>Lista de pedidos</h1>
              <Button
                type='button'
                onClick={() => {
                  handleShowMenuOrder('create', undefined);
                }}> Incluir</Button>
          </Header>
            <TableCustomized>
                <thead>
                    <tr>
                      <th style={{ width: '400px' }}>Id</th>
                      <th style={{ width: '400px' }}>Descrição</th>
                      <th style={{ width: '400px' }}>Quantidade</th>
                      <th style={{ width: '400px' }}>Valor</th>
                      <th style={{ width: '400px' }}>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataTable.map(item => (
                      <tr key={item.id}>
                        <td style={{ width: '180px' }}>{item.id}</td>
                        <td style={{ width: '180px' }}>{item.description}</td>
                        <td style={{ width: '180px' }}>{item.quantity}</td>
                        <td style={{ width: '180px' }}>{item.value}</td>
                        <td style={{ width: '180px' }} id="td-action">
                          <ButtonIcon
                            image={iconEdit}
                            alt="Edit"
                            onClick={() => {
                              handleShowMenuOrder('update', item);
                            }}
                          />
                          <ButtonIcon
                            image={iconTrash}
                            alt="Trash"
                            onClick={() => {
                              handleShowMenuOrder('remove', item);
                            }}
                          />

                        </td>
                      </tr>
                    ))}
                  </tbody>
            </TableCustomized>
          </Screen>
          <Footer>A arte de descomplicar a tecnologia</Footer>
      </BackGround>
    </Container>
  );
};

export default Main;
