import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPilcrow = (props: SvgProps) => (
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
    <Path d="M13 4v16" />
    <Path d="M17 4v16" />
    <Path d="M19 4h-9.5a4.5 4.5 0 0 0 0 9h3.5" />
  </Svg>
);
export default SvgPilcrow;
