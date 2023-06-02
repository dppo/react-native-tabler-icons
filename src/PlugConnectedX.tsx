import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPlugConnectedX = (props: SvgProps) => (
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
    <Path d="M20 16l-4 4" />
    <Path d="M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z" />
    <Path d="M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z" />
    <Path d="M3 21l2.5 -2.5" />
    <Path d="M18.5 5.5l2.5 -2.5" />
    <Path d="M10 11l-2 2" />
    <Path d="M13 14l-2 2" />
    <Path d="M16 16l4 4" />
  </Svg>
);
export default SvgPlugConnectedX;
