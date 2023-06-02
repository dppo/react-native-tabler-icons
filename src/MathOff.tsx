import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMathOff = (props: SvgProps) => (
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
    <Path d="M14 19l2.5 -2.5" />
    <Path d="M18.5 14.5l1.5 -1.5" />
    <Path d="M3 3l18 18" />
    <Path d="M19 5h-7l-.646 2.262" />
    <Path d="M10.448 10.431l-2.448 8.569l-3 -6h-2" />
  </Svg>
);
export default SvgMathOff;
