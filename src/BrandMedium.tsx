import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandMedium = (props: SvgProps) => (
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
    <Path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
    <Path d="M8 9h1l3 3l3 -3h1" />
    <Path d="M8 15l2 0" />
    <Path d="M14 15l2 0" />
    <Path d="M9 9l0 6" />
    <Path d="M15 9l0 6" />
  </Svg>
);
export default SvgBrandMedium;
