import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLogicXor = (props: SvgProps) => (
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
    <Path d="M22 12h-4" />
    <Path d="M2 9h6" />
    <Path d="M2 15h6" />
    <Path d="M7 19c1.778 -4.667 1.778 -9.333 0 -14" />
    <Path d="M10 5c10.667 2.1 10.667 12.6 0 14c1.806 -4.667 1.806 -9.333 0 -14z" />
  </Svg>
);
export default SvgLogicXor;
