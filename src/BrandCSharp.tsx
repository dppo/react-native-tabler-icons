import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandCSharp = (props: SvgProps) => (
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
    <Path d="M10 9a3 3 0 0 0 -3 -3h-.5a3.5 3.5 0 0 0 -3.5 3.5v5a3.5 3.5 0 0 0 3.5 3.5h.5a3 3 0 0 0 3 -3" />
    <Path d="M16 7l-1 10" />
    <Path d="M20 7l-1 10" />
    <Path d="M14 10h7.5" />
    <Path d="M21 14h-7.5" />
  </Svg>
);
export default SvgBrandCSharp;
