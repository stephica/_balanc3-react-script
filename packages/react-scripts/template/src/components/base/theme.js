/*
*
* Blends and Meshes the colors from Material Design
* for use in styled components
*
*/
import {
  cyan500,
  cyan700,
  pinkA200,
  red700,
  purple300,
  orange500,
  grey100,
  white,
  darkBlack,
  fullBlack,
} from 'material-ui/styles/colors';

const theme = {
  default: grey100,
  primary: cyan500,
  secondary: pinkA200,
  alternate: cyan700,
  danger: red700,
  info: purple300,
  dark: darkBlack,
  black: fullBlack,
  white: white,
  warning: orange500,
};
export default theme;
