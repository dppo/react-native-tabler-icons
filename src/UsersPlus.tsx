import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgUsersPlus = (props: SvgProps) => (
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
    <Path d="M5 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
    <Path d="M3 21v-2a4 4 0 0 1 4 -4h4c.96 0 1.84 .338 2.53 .901" />
    <Path d="M16 3.13a4 4 0 0 1 0 7.75" />
    <Path d="M16 19h6" />
    <Path d="M19 16v6" />
  </Svg>
);
export default SvgUsersPlus;
