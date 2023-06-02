import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgElevatorOff = (props: SvgProps) => (
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
    <Path d="M8 4h10a1 1 0 0 1 1 1v10m0 4a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-14" />
    <Path d="M12 8l2 2" />
    <Path d="M10 14l2 2l2 -2" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgElevatorOff;
