import styled from 'styled-components';

const StyledTable = styled.table`
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    background-color: ${p => p.theme.colors.white};
    margin-bottom: ${p => p.theme.space[7]}px;
`;

const StyledTr = styled.tr`
    background-color: ${p => p.theme.colors.blue};
`;

const StyledTd = styled.td`
    text-align: center;
    padding-top: ${p => p.theme.space[2]}px;
    padding-bottom: ${p => p.theme.space[2]}px; 
    border: ${p => p.theme.borders.normal}#B0B9B3;
`;


const StyledTrBody = styled.tr`
    :nth-of-type(2n) {
        background-color: ${p => p.theme.colors.grey};
    }
`;

export { StyledTable, StyledTr, StyledTd, StyledTrBody }