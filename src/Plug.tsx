import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPlug = (props: SvgProps) => (
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
    <Path d="M9.785 6l8.215 8.215l-2.054 2.054a5.81 5.81 0 1 1 -8.215 -8.215l2.054 -2.054z" />
    <Path d="M4 20l3.5 -3.5" />
    <Path d="M15 4l-3.5 3.5" />
    <Path d="M20 9l-3.5 3.5" />
  </Svg>
);
export default SvgPlug;
