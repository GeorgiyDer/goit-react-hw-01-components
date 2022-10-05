import styled from 'styled-components';

const StyledStatics = styled.section`
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    background-color: ${p => p.theme.colors.white};
    margin-top: ${p => p.theme.space[7]}px;
    margin-bottom: ${p => p.theme.space[7]}px;
`;

const StyledTitle = styled.h2`
    padding-top: ${p => p.theme.space[5]}px;
    padding-bottom: ${p => p.theme.space[5]}px;
    text-align: center;
`;

const StyledStatsList = styled.ul`
    display: flex;
`;

const StyledStatsItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 60px;
    background-color: ${getRandomHexColor}
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export { StyledStatics, StyledTitle, StyledStatsList, StyledStatsItem }