import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSquareToggle = (props: SvgProps) => (
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
    <Path d="M12 2l0 20" />
    <Path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8" />
    <Path d="M20 6a2 2 0 0 0 -2 -2" />
    <Path d="M18 20a2 2 0 0 0 2 -2" />
    <Path d="M20 10l0 4" />
  </Svg>
);
export default SvgSquareToggle;
