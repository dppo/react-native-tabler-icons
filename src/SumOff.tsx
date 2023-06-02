import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSumOff = (props: SvgProps) => (
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
    <Path d="M18 18a1 1 0 0 1 -1 1h-11l6 -7m-3 -7h8a1 1 0 0 1 1 1v2" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgSumOff;
