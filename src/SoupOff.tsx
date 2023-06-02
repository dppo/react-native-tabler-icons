import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSoupOff = (props: SvgProps) => (
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
    <Path d="M3 19h16" />
    <Path d="M15 11h6c0 1.691 -.525 3.26 -1.42 4.552m-2.034 2.032a7.963 7.963 0 0 1 -4.546 1.416h-2a8 8 0 0 1 -8 -8h8" />
    <Path d="M12 5v3" />
    <Path d="M15 5v3" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgSoupOff;
