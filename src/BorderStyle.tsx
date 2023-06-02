import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBorderStyle = (props: SvgProps) => (
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
    <Path d="M4 20v-14a2 2 0 0 1 2 -2h14" />
    <Path d="M20 8v.01" />
    <Path d="M20 12v.01" />
    <Path d="M20 16v.01" />
    <Path d="M8 20v.01" />
    <Path d="M12 20v.01" />
    <Path d="M16 20v.01" />
    <Path d="M20 20v.01" />
  </Svg>
);
export default SvgBorderStyle;
