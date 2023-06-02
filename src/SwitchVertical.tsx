import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSwitchVertical = (props: SvgProps) => (
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
    <Path d="M3 8l4 -4l4 4" />
    <Path d="M7 4l0 9" />
    <Path d="M13 16l4 4l4 -4" />
    <Path d="M17 10l0 10" />
  </Svg>
);
export default SvgSwitchVertical;
