import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTextPlus = (props: SvgProps) => (
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
    <Path d="M19 10h-14" />
    <Path d="M5 6h14" />
    <Path d="M14 14h-9" />
    <Path d="M5 18h6" />
    <Path d="M18 15v6" />
    <Path d="M15 18h6" />
  </Svg>
);
export default SvgTextPlus;
