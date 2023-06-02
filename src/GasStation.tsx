import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgGasStation = (props: SvgProps) => (
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
    <Path d="M14 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0v-7l-3 -3" />
    <Path d="M4 20v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14" />
    <Path d="M3 20l12 0" />
    <Path d="M18 7v1a1 1 0 0 0 1 1h1" />
    <Path d="M4 11l10 0" />
  </Svg>
);
export default SvgGasStation;
