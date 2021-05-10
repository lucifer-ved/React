import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
export const Wrapper = styled.div`
    margin:40px;
`;


export const StyledButton = styled(IconButton)`
    position:fixed;
    z-index:100;
    right:20px;
    top:10px;
    background-color:#F5F5F5!important;
`


export const StyledGrid = styled(Grid)`
    margin-top:50px;
    z-index:-1;
`