import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBorderStyle2 = (props: SvgProps) => (
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
    <Path d="M4 18v.01" />
    <Path d="M8 18v.01" />
    <Path d="M12 18v.01" />
    <Path d="M16 18v.01" />
    <Path d="M20 18v.01" />
    <Path d="M18 12h2" />
    <Path d="M11 12h2" />
    <Path d="M4 12h2" />
    <Path d="M4 6h16" />
  </Svg>
);
export default SvgBorderStyle2;
