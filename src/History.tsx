import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHistory = (props: SvgProps) => (
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
    <Path d="M12 8l0 4l2 2" />
    <Path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
  </Svg>
);
export default SvgHistory;
