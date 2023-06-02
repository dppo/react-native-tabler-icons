import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTank = (props: SvgProps) => (
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
    <Path d="M2 12m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
    <Path d="M6 12l1 -5h5l3 5" />
    <Path d="M21 9l-7.8 0" />
  </Svg>
);
export default SvgTank;
