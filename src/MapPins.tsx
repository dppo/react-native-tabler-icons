import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMapPins = (props: SvgProps) => (
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
    <Path d="M10.828 9.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z" />
    <Path d="M8 7l0 .01" />
    <Path d="M18.828 17.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z" />
    <Path d="M16 15l0 .01" />
  </Svg>
);
export default SvgMapPins;
