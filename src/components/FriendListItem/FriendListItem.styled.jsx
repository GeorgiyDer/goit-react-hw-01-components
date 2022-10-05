import styled from 'styled-components';

const StyledFriendItem = styled.li`
    display: flex;
    align-items: center;
    height: 70px;
    background-color: ${p => p.theme.colors.white};
    margin-top: ${p => p.theme.space[4]}px;
    margin-bottom: ${p => p.theme.space[4]}px;
    box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
    border-radius: ${p => p.theme.radii.normal}
`;

const StyledImg = styled.img`
    width: 50px;
    height: 50px;
    margin-right: ${p => p.theme.space[4]}px;

`;

const StyledStatus = styled.span`
    width: 20px;    
    height: 20px;
    border-radius: ${p => p.theme.radii.round};
    margin-left: ${p => p.theme.space[4]}px;
    margin-right: ${p => p.theme.space[4]}px;
    background-color: ${p => 
    p.isOnline ? p.theme.colors.green : p.theme.colors.red
    };
`;

export { StyledFriendItem, StyledImg, StyledStatus }