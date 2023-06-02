import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSTurnUp = (props: SvgProps) => (
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
    <Path d="M7 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <Path d="M5 17v-9.5a3.5 3.5 0 0 1 7 0v9a3.5 3.5 0 0 0 7 0v-13.5" />
    <Path d="M16 6l3 -3l3 3" />
  </Svg>
);
export default SvgSTurnUp;
