import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCircuitSwitchOpen = (props: SvgProps) => (
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
    <Path d="M2 12h2" />
    <Path d="M20 12h2" />
    <Path d="M6 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M18 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M7.5 10.5l7.5 -5.5" />
  </Svg>
);
export default SvgCircuitSwitchOpen;
