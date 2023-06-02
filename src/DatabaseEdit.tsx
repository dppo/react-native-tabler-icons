import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDatabaseEdit = (props: SvgProps) => (
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
    <Path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3" />
    <Path d="M4 6v6c0 1.657 3.582 3 8 3c.478 0 .947 -.016 1.402 -.046" />
    <Path d="M20 12v-6" />
    <Path d="M4 12v6c0 1.526 3.04 2.786 6.972 2.975" />
    <Path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z" />
  </Svg>
);
export default SvgDatabaseEdit;
