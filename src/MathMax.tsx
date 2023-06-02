import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMathMax = (props: SvgProps) => (
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
    <Path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M3 20c0 -8.75 4 -14 7 -14.5m4 0c3 .5 7 5.75 7 14.5" />
  </Svg>
);
export default SvgMathMax;