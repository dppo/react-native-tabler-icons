import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgZodiacLeo = (props: SvgProps) => (
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
    <Path d="M13 17a4 4 0 1 0 8 0" />
    <Path d="M6 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M11 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <Path d="M7 7c0 3 2 5 2 9" />
    <Path d="M15 7c0 4 -2 6 -2 10" />
  </Svg>
);
export default SvgZodiacLeo;
