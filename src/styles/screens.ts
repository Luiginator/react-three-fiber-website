const size = {
  small: '576px',
  medium: '768px',
  large: '992px',
  extraLarge: '1200px',
};

export const device = {
  small: `@media (min-width: ${size.small})`,
  medium: `@media (min-width: ${size.medium})`,
  large: `@media (min-width: ${size.large})`,
  extraLarge: `@media (min-width: ${size.extraLarge})`,
};
