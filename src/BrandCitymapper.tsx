import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandCitymapper = (props: SvgProps) => (
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
    <Path d="M3 11a1 1 0 1 1 -1 1.013a1 1 0 0 1 1 -1v-.013z" />
    <Path d="M21 11a1 1 0 1 1 -1 1.013a1 1 0 0 1 1 -1v-.013z" />
    <Path d="M8 12h8" />
    <Path d="M13 9l3 3l-3 3" />
  </Svg>
);
export default SvgBrandCitymapper;
