import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMobiledata = (props: SvgProps) => (
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
    <Path d="M16 12v-8" />
    <Path d="M8 20v-8" />
    <Path d="M13 7l3 -3l3 3" />
    <Path d="M5 17l3 3l3 -3" />
  </Svg>
);
export default SvgMobiledata;
