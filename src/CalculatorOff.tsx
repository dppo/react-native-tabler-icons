import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCalculatorOff = (props: SvgProps) => (
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
    <Path d="M19.823 19.824a2 2 0 0 1 -1.823 1.176h-12a2 2 0 0 1 -2 -2v-14c0 -.295 .064 -.575 .178 -.827m2.822 -1.173h11a2 2 0 0 1 2 2v11" />
    <Path d="M10 10h-1a1 1 0 0 1 -1 -1v-1m3 -1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1" />
    <Path d="M8 14v.01" />
    <Path d="M12 14v.01" />
    <Path d="M8 17v.01" />
    <Path d="M12 17v.01" />
    <Path d="M16 17v.01" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgCalculatorOff;