import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgListNumbers = (props: SvgProps) => (
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
    <Path d="M11 6h9" />
    <Path d="M11 12h9" />
    <Path d="M12 18h8" />
    <Path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" />
    <Path d="M6 10v-6l-2 2" />
  </Svg>
);
export default SvgListNumbers;
