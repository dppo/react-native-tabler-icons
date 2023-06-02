import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMilkOff = (props: SvgProps) => (
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
    <Path d="M10 6h6v-2a1 1 0 0 0 -1 -1h-6a1 1 0 0 0 -1 1" />
    <Path d="M16 6l1.094 1.759a6 6 0 0 1 .906 3.17v3.071m0 4v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8.071a6 6 0 0 1 .906 -3.17l.327 -.525" />
    <Path d="M12 16m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgMilkOff;
