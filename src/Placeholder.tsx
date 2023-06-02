import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPlaceholder = (props: SvgProps) => (
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
    <Path d="M10 20.415a8 8 0 1 0 3 -15.415h-3" />
    <Path d="M13 8l-3 -3l3 -3" />
    <Path d="M7 17l4 -4l-4 -4l-4 4z" />
  </Svg>
);
export default SvgPlaceholder;
