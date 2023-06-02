import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBuildingChurch = (props: SvgProps) => (
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
    <Path d="M3 21l18 0" />
    <Path d="M10 21v-4a2 2 0 0 1 4 0v4" />
    <Path d="M10 5l4 0" />
    <Path d="M12 3l0 5" />
    <Path d="M6 21v-7m-2 2l8 -8l8 8m-2 -2v7" />
  </Svg>
);
export default SvgBuildingChurch;
