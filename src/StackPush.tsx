import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgStackPush = (props: SvgProps) => (
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
    <Path d="M6 10l-2 1l8 4l8 -4l-2 -1" />
    <Path d="M4 15l8 4l8 -4" />
    <Path d="M12 4v7" />
    <Path d="M15 8l-3 3l-3 -3" />
  </Svg>
);
export default SvgStackPush;
