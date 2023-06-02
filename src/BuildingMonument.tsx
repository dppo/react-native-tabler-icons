import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBuildingMonument = (props: SvgProps) => (
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
    <Path d="M8 18l2 -13l2 -2l2 2l2 13" />
    <Path d="M5 21v-3h14v3" />
    <Path d="M3 21l18 0" />
  </Svg>
);
export default SvgBuildingMonument;
