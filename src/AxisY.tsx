import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgAxisY = (props: SvgProps) => (
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
    <Path d="M11 20h-.01" />
    <Path d="M15 20h-.01" />
    <Path d="M19 20h-.01" />
    <Path d="M4 7l3 -3l3 3" />
    <Path d="M7 20v-16" />
  </Svg>
);
export default SvgAxisY;
