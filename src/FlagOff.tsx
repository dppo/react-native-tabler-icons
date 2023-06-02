import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFlagOff = (props: SvgProps) => (
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
    <Path d="M5 5v16" />
    <Path d="M19 5v9" />
    <Path d="M7.641 3.645a5 5 0 0 1 4.359 1.355a5 5 0 0 0 7 0" />
    <Path d="M5 14a5 5 0 0 1 7 0a4.984 4.984 0 0 0 3.437 1.429m3.019 -.966c.19 -.14 .371 -.294 .544 -.463" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgFlagOff;
