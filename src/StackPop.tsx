import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgStackPop = (props: SvgProps) => (
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
    <Path d="M7 9.5l-3 1.5l8 4l8 -4l-3 -1.5" />
    <Path d="M4 15l8 4l8 -4" />
    <Path d="M12 11v-7" />
    <Path d="M9 7l3 -3l3 3" />
  </Svg>
);
export default SvgStackPop;
