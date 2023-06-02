import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDisabled2 = (props: SvgProps) => (
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
    <Path d="M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M9 11a5 5 0 1 0 3.95 7.95" />
    <Path d="M19 20l-4 -5h-4l3 -5l-4 -3l-4 1" />
  </Svg>
);
export default SvgDisabled2;
