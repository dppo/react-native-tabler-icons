import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgUserShield = (props: SvgProps) => (
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
    <Path d="M6 21v-2a4 4 0 0 1 4 -4h2" />
    <Path d="M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5z" />
    <Path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
  </Svg>
);
export default SvgUserShield;
