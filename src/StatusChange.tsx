import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgStatusChange = (props: SvgProps) => (
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
    <Path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M6 12v-2a6 6 0 1 1 12 0v2" />
    <Path d="M15 9l3 3l3 -3" />
  </Svg>
);
export default SvgStatusChange;
