import { css } from 'styled-components';

const color = (color, percent) => {
  const c = color.replace(/[^a-zA-Z0-9 ]/g, '');
  const num = parseInt(c, 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    B = (num >> 8 & 0x00ff) + amt,
    G = (num & 0x0000ff) + amt;
  const newColor = (0x1000000 +
    (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 +
    (G < 255 ? G < 1 ? 0 : G : 255))
    .toString(16)
    .slice(1);
  return `#${newColor}`;
};

export default (
  {
    colors,
    shades = [4, 7],
    fonts,
    cdnRoot = '',
    form = {},
    media = {},
    icon,
    ...other
  }
) => {
  if (!colors) console.error('You must supply a colors object');
  if (!fonts.primaryFont) console.warn('missing primary font.');
  if (!fonts.secondaryFont) console.warn('missing secondary font.');
  if (!colors.default) colors.default = '#F2F2F2';

  const generatedColors = Object.keys(colors).reduce(
    (accumulator, colorName) => {
      const hexColor = colors[colorName];
      const shadeCount = shades.length;
      accumulator[`${colorName}`] = hexColor;
      if (shadeCount >= 1) {
        accumulator[`${colorName}Dark`] = color(hexColor, (-1) * shades[0]);
        accumulator[`${colorName}Light`] = color(hexColor, shades[0]);
      }
      if (shadeCount >= 2) {
        accumulator[`${colorName}Darker`] = color(hexColor, (-1) * shades[1]);
        accumulator[`${colorName}Lighter`] = color(hexColor, shades[1]);
      }
      if (shadeCount >= 3) {
        accumulator[`${colorName}Darkest`] = color(hexColor, (-1) * shades[2]);
        accumulator[`${colorName}Lightest`] = color(hexColor, shades[2]);
      }
      return accumulator;
    },
    {}
  );

  const baseGray = colors.base || '#000000';
  generatedColors.gray0 = baseGray;
  generatedColors.gray20 = color(baseGray, 20);
  generatedColors.gray40 = color(baseGray, 40);
  generatedColors.gray60 = color(baseGray, 60);
  generatedColors.gray80 = color(baseGray, 80);
  generatedColors.gray90 = color(baseGray, 90);
  generatedColors.gray95 = color(baseGray, 95);
  generatedColors.gray100 = color(baseGray, 100);

  const generatedForm = {
    formTransitionSpeed: '0.25s',
    inputHeight: '52px',
    inputSingleHeight: '44px',
    borderRadius: '3px',
    formSpacing: '10px',
    ...form,
  };

  const generatedBreakpoints = {
    small: 680,
    medium: 885,
    large: 1005,
    largest: 1330,
    ...media,
  };

  // iterate through the sizes and create a media template
  const generatedMedia = Object.keys(generatedBreakpoints).reduce(
    (accumulator, label) => {
      // use em in breakpoints to work properly cross-browser and support users
      // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
      const emSize = generatedBreakpoints[label] / 16;
      accumulator[`${label}Max`] = (...args) => css`
      @media (max-width: ${emSize}em) {
        ${css(...args)}
      }
    `;
      accumulator[`${label}Min`] = (...args) => css`
      @media (min-width: ${emSize}em) {
        ${css(...args)}
      }
    `;
      return accumulator;
    },
    {}
  );

  const defaultIcons = {
    class: '',
    prefix: '',
    content: 'class', // or body
  };
  const generatedIcon = { ...defaultIcons, ...icon };

  return {
    ...generatedColors,
    ...generatedForm,
    breakpoints: { ...generatedBreakpoints },
    media: { ...generatedMedia },
    icon: { ...generatedIcon },
    ...fonts,
    cdnRoot,
    ...other,
  };
};
