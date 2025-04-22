import {TableLine, TableColumn, Category, Value, DeleteButton} from './styles';
import {Item} from '../../types/Item';
import {formatDate} from '../../helpers/dateFilter';
import {categories} from '../../data/categories';
 
type Props = {
    item: Item
    onDelete: (item: Item) => void
}

export const TableItem = ({ item, onDelete }: Props) => {
    return (
        <TableLine>
            <TableColumn>{formatDate(item.date)}</TableColumn>
            <TableColumn>
                <Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </Category>
            </TableColumn>
            <TableColumn>{item.title}</TableColumn>
            <TableColumn>
                <Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </Value>
            </TableColumn>
            <DeleteButton onClick={() => onDelete(item)}>X</DeleteButton  >
        </TableLine>
    );
}