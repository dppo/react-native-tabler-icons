import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgWashMachine = (props: SvgProps) => (
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
    <Path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
    <Path d="M12 14m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <Path d="M8 6h.01" />
    <Path d="M11 6h.01" />
    <Path d="M14 6h2" />
    <Path d="M8 14c1.333 -.667 2.667 -.667 4 0c1.333 .667 2.667 .667 4 0" />
  </Svg>
);
export default SvgWashMachine;
