import React, { useState } from 'react'
import styled from 'styled-components'
import { selectPendingOrders } from '../../pages/order/ordersSlice'
import { useSelector, useDispatch } from 'react-redux';
import EdiText from 'react-editext';
import EditIcon from '../../assets/icons/edit.svg'
import { edit } from '../../pages/order/ordersSlice';
import Toast, {orderEditSuccess} from '../toast/Toast'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-family: Roboto;
    margin-bottom: 50px;
`
const Title = styled.span`
    margin-top: 10px;
    color: white;
    font-family: 'Fjalla One', sans-serif;    
`
const HistoryWrapper = styled.span`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`

const TableWrapper = styled.table`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
`

const Header = styled.thead`
`

const Body = styled.tbody`
`

const TableRow = styled.tr`
    display: flex;
    margin-top: 20px;
    text-align: center;
`

const HeaderCol = styled.th`
    font-family: Roboto;
    font-family: 'Fjalla One', sans-serif;    
    color: white;
    width: 22%;
`

const BodyCol = styled.td`
    font-family: Roboto;
    color: white;
    width: 22%;
`
const EditWrapper = styled.img`
    transition: all 0.3s;
    &:active{
        transform: scale(0.7);
    }
`

const StyledEdiText = styled(EdiText)`
    align-items: center;
    button[editext="edit-button"] {
        color: #000;
        width: 50px;
        display: none;
    }
`

export default function OrderHistory() {
    const [editing, setEditing] = useState(false)
    let orderHistory = useSelector(selectPendingOrders)
    const dispatch = useDispatch()
    const onSave = (quantity, stock) => {
            let newStock = {label: stock.label, quantity: quantity}
            dispatch(edit(newStock))
            if(quantity !== stock.quantity)orderEditSuccess()
    }

    return (
        <Wrapper>
            <Toast/>
            <Title>Order History</Title>
            <HistoryWrapper>
            <TableWrapper>
                <Header>
                    <TableRow>
                        <HeaderCol>Stock</HeaderCol>
                        <HeaderCol>Quantity</HeaderCol>
                        <HeaderCol>Price</HeaderCol>
                        <HeaderCol>Date</HeaderCol>
                        <HeaderCol>Edit</HeaderCol>
                    </TableRow>
                </Header>
                <Body>
                    {orderHistory.map(stock => 
                        <TableRow key={stock.label+stock.quantity}>
                            <BodyCol key={stock.label}>{stock.label}</BodyCol>
                            <BodyCol key={stock.quantity}>
                                <StyledEdiText  
                                    type="number"
                                    editing={editing} 
                                    onSave={(e) => onSave(e, stock)} 
                                    startEditingOnFocus 
                                    submitOnUnfocus 
                                    value={stock.quantity}
                                    validation={val => val < 100 && val > 1}
                                    validationMessage="Value must be between 1 and 100."
                                />
                                </BodyCol>
                            <BodyCol key={stock.price}>{parseFloat(stock.price).toFixed(2)}$</BodyCol>
                            <BodyCol key={stock.date}>{stock.date}</BodyCol>
                            <BodyCol key={Math.random()}><EditWrapper onClick={() => setEditing(e => !e)} src={EditIcon}/></BodyCol>
                        </TableRow>
                    )} 
                </Body>
            </TableWrapper>
            </HistoryWrapper>
        </Wrapper>
    )
}