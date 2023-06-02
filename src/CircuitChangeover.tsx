import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCircuitChangeover = (props: SvgProps) => (
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
    <Path d="M20 7h2" />
    <Path d="M6 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M18 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M20 17h2" />
    <Path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M7.5 10.5l8.5 -3.5" />
  </Svg>
);
export default SvgCircuitChangeover;
