import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBoltOff = (props: SvgProps) => (
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
    <Path d="M3 3l18 18" />
    <Path d="M15.212 15.21l-4.212 5.79v-7h-6l3.79 -5.21m1.685 -2.32l2.525 -3.47v6m1 1h5l-2.104 2.893" />
  </Svg>
);
export default SvgBoltOff;
