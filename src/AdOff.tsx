import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgAdOff = (props: SvgProps) => (
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
    <Path d="M9 5h10a2 2 0 0 1 2 2v10m-2 2h-14a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2" />
    <Path d="M7 15v-4a2 2 0 0 1 2 -2m2 2v4" />
    <Path d="M7 13h4" />
    <Path d="M17 9v4" />
    <Path d="M16.115 12.131c.33 .149 .595 .412 .747 .74" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgAdOff;
