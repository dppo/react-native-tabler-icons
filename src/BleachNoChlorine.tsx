import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBleachNoChlorine = (props: SvgProps) => (
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
    <Path d="M6.576 19l7.907 -13.733" />
    <Path d="M11.719 19.014l5.346 -9.284" />
  </Svg>
);
export default SvgBleachNoChlorine;
