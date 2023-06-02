import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTemperatureOff = (props: SvgProps) => (
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
    <Path d="M10 10v3.5a4 4 0 1 0 5.836 2.33m-1.836 -5.83v-5a2 2 0 1 0 -4 0v1" />
    <Path d="M13 9h1" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgTemperatureOff;
