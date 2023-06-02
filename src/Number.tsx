import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgNumber = (props: SvgProps) => (
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
    <Path d="M4 17v-10l7 10v-10" />
    <Path d="M15 17h5" />
    <Path d="M17.5 10m-2.5 0a2.5 3 0 1 0 5 0a2.5 3 0 1 0 -5 0" />
  </Svg>
);
export default SvgNumber;
