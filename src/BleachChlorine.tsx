import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBleachChlorine = (props: SvgProps) => (
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
    <Path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
    <Path d="M11 12h-1a2 2 0 1 0 0 4h1" />
    <Path d="M14 12v4h2" />
  </Svg>
);
export default SvgBleachChlorine;
