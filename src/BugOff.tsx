import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBugOff = (props: SvgProps) => (
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
    <Path d="M9.884 5.873a3 3 0 0 1 5.116 2.127v1" />
    <Path d="M13 9h3a6 6 0 0 1 1 3v1m-.298 3.705a5 5 0 0 1 -9.702 -1.705v-3a6 6 0 0 1 1 -3h1" />
    <Path d="M3 13h4" />
    <Path d="M17 13h4" />
    <Path d="M12 20v-6" />
    <Path d="M4 19l3.35 -2" />
    <Path d="M4 7l3.75 2.4" />
    <Path d="M20 7l-3.75 2.4" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgBugOff;
