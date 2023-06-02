import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSpaceOff = (props: SvgProps) => (
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
    <Path d="M4 10v3a1 1 0 0 0 1 1h9m4 0h1a1 1 0 0 0 1 -1v-3" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgSpaceOff;
