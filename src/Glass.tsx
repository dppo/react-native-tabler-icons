import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgGlass = (props: SvgProps) => (
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
    <Path d="M8 21l8 0" />
    <Path d="M12 15l0 6" />
    <Path d="M17 3l1 7c0 3.012 -2.686 5 -6 5s-6 -1.988 -6 -5l1 -7h10z" />
  </Svg>
);
export default SvgGlass;
