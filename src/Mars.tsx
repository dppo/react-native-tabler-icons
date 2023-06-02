import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMars = (props: SvgProps) => (
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
    <Path d="M10 14m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
    <Path d="M19 5l-5.4 5.4" />
    <Path d="M19 5l-5 0" />
    <Path d="M19 5l0 5" />
  </Svg>
);
export default SvgMars;
