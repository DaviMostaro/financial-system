import { Item } from '../../types/Item';
import {Table, TableHeadColumn} from './styles'
import {TableItem} from '../TableItem';

type Props = {
    list: Item[]
    changeList: (list: Item[]) => void
}

export const TableArea = ({ list, changeList }: Props) => {

    const handleDelete = (item: Item) => {
        let newList = [...list];
        newList.splice(newList.indexOf(item), 1);
        changeList(newList);
    }

    

    return (
        <Table>
            <thead>
                <tr>
                    <TableHeadColumn width={100}>Data</TableHeadColumn>
                    <TableHeadColumn width={130}>Categoria</TableHeadColumn>
                    <TableHeadColumn>Título</TableHeadColumn>
                    <TableHeadColumn width={150}>Valor</TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <TableItem onDelete={handleDelete} key={index} item={item} />
                ))}
            </tbody>
        </Table>
    );
}