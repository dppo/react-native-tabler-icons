import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBoxMultiple6 = (props: SvgProps) => (
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
    <Path d="M7 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
    <Path d="M14 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M16 8a2 2 0 1 0 -4 0v4" />
    <Path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
  </Svg>
);
export default SvgBoxMultiple6;
