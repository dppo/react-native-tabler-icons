import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandSuperhuman = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <Path d="M16 12l4 3l-8 7l-8 -7l4 -3" />
    <Path d="M12 3l-8 6l8 6l8 -6z" />
    <Path d="M12 15h8" />
  </Svg>
);
export default SvgBrandSuperhuman;
