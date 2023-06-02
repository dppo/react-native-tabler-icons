import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFrameOff = (props: SvgProps) => (
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
    <Path d="M4 7h3m4 0h9" />
    <Path d="M4 17h13" />
    <Path d="M7 7v13" />
    <Path d="M17 4v9m0 4v3" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgFrameOff;
