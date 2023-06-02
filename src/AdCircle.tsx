import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgAdCircle = (props: SvgProps) => (
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
    <Path d="M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0" />
    <Path d="M7 15v-4.5a1.5 1.5 0 0 1 3 0v4.5" />
    <Path d="M7 13h3" />
    <Path d="M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z" />
  </Svg>
);
export default SvgAdCircle;
