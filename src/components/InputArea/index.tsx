import {useState} from 'react';
import { Item } from '../../types/Item';
import {Container, Area, InputTitle, Button} from './styles';

type Props = {
    onAdd: (item: Item) => void
}
export const InputArea = ({onAdd}: Props) => {

    const [Data, setData] = useState('');
    const [Category, setCategory] = useState('');
    const [Title, setTitle] = useState('');
    const [Value, setValue] = useState(0);

    const handleAddEvent = () => {
        if(Data === '' || Category === '' || Title === '' || Value === 0) {
            alert('Preencha todos os campos!'); 
            return;
        }
    
        let category = Category === 'Alimentação' ? 'food' : Category === 'Aluguel' ? 'rent' : 'salary';
    
        const [year, month, day] = Data.split('-').map(Number);
        const date = new Date(year, month - 1, day); 
    
        let newItem: Item = {
            date: date,
            category: category,
            title: Title,
            value: Value
        };
    
        onAdd(newItem);

        setData('');
        setCategory('');
        setTitle('');
        setValue(0);
    }

    return (
        <Container>
            <Area>
                <InputTitle>Data</InputTitle>
                <input value={Data} type='date' onChange={e => setData(e.target.value)} />
            </Area>

            <Area>
                <InputTitle>Categoria</InputTitle>
                <select value={Category} onChange={e => setCategory(e.target.value)}>
                    <option>Alimentação</option>
                    <option>Aluguel</option>
                    <option>Salario</option>
                </select>
            </Area>

            <Area>
                <InputTitle>Título</InputTitle>
                <input value={Title} type='text' onChange={e => setTitle(e.target.value)} />
            </Area>

            <Area>
                <InputTitle>Valor</InputTitle>
                <input value={Value} type='number' onChange={e => setValue(parseFloat(e.target.value))} />
            </Area>

            <Button onClick={handleAddEvent}>Adicionar</Button>
        </Container>
    );
}