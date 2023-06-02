import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBuildingCircus = (props: SvgProps) => (
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
    <Path d="M4 11h16" />
    <Path d="M12 6.5c0 1 -5 4.5 -8 4.5" />
    <Path d="M12 6.5c0 1 5 4.5 8 4.5" />
    <Path d="M6 11c-.333 5.333 -1 8.667 -2 10h4c1 0 4 -4 4 -9v-1" />
    <Path d="M18 11c.333 5.333 1 8.667 2 10h-4c-1 0 -4 -4 -4 -9v-1" />
    <Path d="M12 7v-4l2 1h-2" />
  </Svg>
);
export default SvgBuildingCircus;
