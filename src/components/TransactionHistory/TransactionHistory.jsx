import { StyledTable, StyledTr, StyledTd, StyledTrBody } from 'components/TransactionHistory/TransactionHistory.styled' 
import PropTypes from 'prop-types';


export const TransactionHistory = ({ items }) => { 
    return (
    <StyledTable>
    <thead>
        <StyledTr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
        </StyledTr>  
    </thead>    
        <tbody>
                {items.map(({ id, type, amount, currency }) => (
                <StyledTrBody key={id}>
                <StyledTd>{type}</StyledTd>
                <StyledTd>{amount}</StyledTd>
                <StyledTd>{currency}</StyledTd>
                </StyledTrBody>
            ))}
        </tbody>
    </StyledTable>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
};

