import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSortAZ = (props: SvgProps) => (
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
    <Path d="M16 8h4l-4 8h4" />
    <Path d="M4 16v-6a2 2 0 1 1 4 0v6" />
    <Path d="M4 13h4" />
    <Path d="M11 12h2" />
  </Svg>
);
export default SvgSortAZ;
