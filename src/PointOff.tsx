import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPointOff = (props: SvgProps) => (
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
    <Path d="M9.15 9.194a4 4 0 0 0 5.697 5.617m1.153 -2.811a4 4 0 0 0 -4 -4" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgPointOff;
