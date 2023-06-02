import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRotateClockwise = (props: SvgProps) => (
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
    <Path d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5" />
  </Svg>
);
export default SvgRotateClockwise;
