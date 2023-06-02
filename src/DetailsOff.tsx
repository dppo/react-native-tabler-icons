import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDetailsOff = (props: SvgProps) => (
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
    <Path d="M5 19h14" />
    <Path d="M20.986 16.984a2 2 0 0 0 -.146 -.734l-7.1 -12.25a2 2 0 0 0 -3.5 0l-.821 1.417m-1.469 2.534l-4.81 8.299a2 2 0 0 0 1.75 2.75" />
    <Path d="M12 3v5m0 4v7" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgDetailsOff;
