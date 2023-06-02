import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMultiplier2X = (props: SvgProps) => (
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
    <Path d="M14 16l4 -4" />
    <Path d="M18 16l-4 -4" />
    <Path d="M6 10a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0" />
  </Svg>
);
export default SvgMultiplier2X;
