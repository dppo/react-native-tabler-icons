import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCeOff = (props: SvgProps) => (
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
    <Path d="M11 4a7.99 7.99 0 0 0 -2.581 .426" />
    <Path d="M5.867 5.864a8 8 0 0 0 5.133 14.136" />
    <Path d="M20 4a8 8 0 0 0 -7.29 4.7" />
    <Path d="M12 12a8 8 0 0 0 8 8" />
    <Path d="M16 12h4" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgCeOff;
