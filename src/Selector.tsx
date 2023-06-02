import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSelector = (props: SvgProps) => (
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
    <Path d="M8 9l4 -4l4 4" />
    <Path d="M16 15l-4 4l-4 -4" />
  </Svg>
);
export default SvgSelector;
