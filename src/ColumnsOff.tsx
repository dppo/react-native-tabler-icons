import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgColumnsOff = (props: SvgProps) => (
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
    <Path d="M4 6h2" />
    <Path d="M4 10h5.5" />
    <Path d="M4 14h5.5" />
    <Path d="M4 18h5.5" />
    <Path d="M14.5 6h5.5" />
    <Path d="M14.5 10h5.5" />
    <Path d="M18 14h2" />
    <Path d="M14.5 18h3.5" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgColumnsOff;
