import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgZodiacPisces = (props: SvgProps) => (
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
    <Path d="M5 3a21 21 0 0 1 0 18" />
    <Path d="M19 3a21 21 0 0 0 0 18" />
    <Path d="M5 12l14 0" />
  </Svg>
);
export default SvgZodiacPisces;
