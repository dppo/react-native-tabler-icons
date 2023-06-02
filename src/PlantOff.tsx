import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPlantOff = (props: SvgProps) => (
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
    <Path d="M17 17v2a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4h8" />
    <Path d="M11.9 7.908a6 6 0 0 0 -4.79 -4.806m-4.11 -.102v2a6 6 0 0 0 6 6h2" />
    <Path d="M12.531 8.528a6 6 0 0 1 5.469 -3.528h3v1a6 6 0 0 1 -5.037 5.923" />
    <Path d="M12 15v-3" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgPlantOff;
