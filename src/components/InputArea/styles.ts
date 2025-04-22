import styled from 'styled-components';

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    
`;

export const InputTitle = styled.div`
    font-weight: bold;
    font-size: 16px;
`;


export const Area = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    
    input {
        max-width: 150px;
        border: 1px solid #CCC;
        border-radius: 5px;
        width: 100%;
        height: 30px;
        margin-top: 5px;
        padding: 0 10px;
        font-size: 16px;
    }

    select {
        max-width: 150px;
        border: 1px solid #CCC;
        border-radius: 5px;
        width: 100%;
        height: 30px;
        margin-top: 5px;
        padding: 0 10px;
        font-size: 16px;
    }
`;

export const Button = styled.button`
    background-color: darkblue;
    border: none;
    border-radius: 5px;
    color: #FFF;
    height: 40px;
    margin-top: 5px;
    padding: 0 10px;
    font-size: 16px;
    width: 150px;
    cursor: pointer;
`;

