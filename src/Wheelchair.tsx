import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgWheelchair = (props: SvgProps) => (
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
    <Path d="M8 16m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
    <Path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M19 17a3 3 0 0 0 -3 -3h-3.4" />
    <Path d="M3 3h1a2 2 0 0 1 2 2v6" />
    <Path d="M6 8h11" />
    <Path d="M15 8v6" />
  </Svg>
);
export default SvgWheelchair;
