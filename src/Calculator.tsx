import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCalculator = (props: SvgProps) => (
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
    <Path d="M4 3m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
    <Path d="M8 7m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
    <Path d="M8 14l0 .01" />
    <Path d="M12 14l0 .01" />
    <Path d="M16 14l0 .01" />
    <Path d="M8 17l0 .01" />
    <Path d="M12 17l0 .01" />
    <Path d="M16 17l0 .01" />
  </Svg>
);
export default SvgCalculator;
