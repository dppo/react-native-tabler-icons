import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgVaccineOff = (props: SvgProps) => (
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
    <Path d="M17 3l4 4" />
    <Path d="M19 5l-4.5 4.5" />
    <Path d="M11.5 6.5l6 6" />
    <Path d="M16.5 11.5l-.5 .5m-2 2l-4 4h-4v-4l4 -4m2 -2l.5 -.5" />
    <Path d="M7.5 12.5l1.5 1.5" />
    <Path d="M3 21l3 -3" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgVaccineOff;
