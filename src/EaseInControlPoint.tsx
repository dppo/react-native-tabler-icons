import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgEaseInControlPoint = (props: SvgProps) => (
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
    <Path d="M3 19c8 0 18 -16 18 -16" />
    <Path d="M17 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0z" />
    <Path d="M17 19h-2" />
    <Path d="M12 19h-2" />
  </Svg>
);
export default SvgEaseInControlPoint;
