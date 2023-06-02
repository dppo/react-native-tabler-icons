import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgEaseInOutControlPoints = (props: SvgProps) => (
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
    <Path d="M17 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0z" />
    <Path d="M17 20h-2" />
    <Path d="M7 4a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z" />
    <Path d="M7 4h2" />
    <Path d="M14 4h-2" />
    <Path d="M12 20h-2" />
    <Path d="M3 20c8 0 10 -16 18 -16" />
  </Svg>
);
export default SvgEaseInOutControlPoints;
