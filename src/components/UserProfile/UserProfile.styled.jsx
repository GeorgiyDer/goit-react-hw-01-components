import styled from 'styled-components';

const StyledProfileDiv = styled.div`
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    background-color: ${p => p.theme.colors.white};
    margin-top: ${p => p.theme.space[7]}px;
`;

const StyledDescrDiv = styled.div`
    padding: ${p => p.theme.space[4]}px;
    text-align: center;
`;

const StyledImg = styled.img`
    width: 200px;
    height: auto;
    margin-bottom: ${p => p.theme.space[4]}px;
    border-radius: ${p => p.theme.radii.round};
`;

const StyledName = styled.p`
    font-size: ${p => p.theme.fontSizes.l};
`;

const StyledStatsList = styled.ul`
    background-color: ${p => p.theme.colors.white};
    display: flex;

`;

const StyledStatsItem = styled.li`
    width: 33.33%;
    display: flex;
    align-items: center;
    flex-direction: column;
    border: ${p => p.theme.borders.normal}#B0B9B3;
    padding-top: ${p => p.theme.space[4]}px;
    padding-bottom: ${p => p.theme.space[4]}px;
`;

const StyledQuantitySpan = styled.span`
    font-size: ${p => p.theme.fontSizes.l};
// `;

export { StyledProfileDiv, StyledDescrDiv, StyledImg, StyledName, StyledStatsList, StyledStatsItem, StyledQuantitySpan }