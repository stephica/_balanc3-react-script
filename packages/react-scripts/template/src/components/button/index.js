import Button from 'material-ui/RaisedButton';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  button, a {color: ${props => props.theme.white} !important;}
`;

export default StyledButton;
