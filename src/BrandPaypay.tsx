import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandPaypay = (props: SvgProps) => (
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
    <Path d="M6.375 21l3.938 -13.838" />
    <Path d="M3 6c16.731 0 21.231 9.881 4.5 11" />
    <Path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z" />
  </Svg>
);
export default SvgBrandPaypay;
