import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLogicOr = (props: SvgProps) => (
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
    <Path d="M22 12h-6" />
    <Path d="M2 9h7" />
    <Path d="M2 15h7" />
    <Path d="M8 5c10.667 2.1 10.667 12.6 0 14c1.806 -4.667 1.806 -9.333 0 -14z" />
  </Svg>
);
export default SvgLogicOr;
