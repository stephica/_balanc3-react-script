import generateTheme from './generateTheme';
const colors = {
  default: '#F2F2F2',
  primary: '#36C6B1',
  secondary: '#FF8188',
  alternate: '#54B1CC',
  danger: '#ED4750',
  info: '#B384BA',
  warning: '#F6BB43',
  dark: '#203640',
};

const fonts = {
  primaryFont: '"Proxima Nova", sans-serif',
  secondaryFont: '"Azo Sans", sans-serif',
};

export default generateTheme({ colors, fonts });
