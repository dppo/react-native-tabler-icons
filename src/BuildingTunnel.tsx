import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBuildingTunnel = (props: SvgProps) => (
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
    <Path d="M5 21h14a2 2 0 0 0 2 -2v-7a9 9 0 0 0 -18 0v7a2 2 0 0 0 2 2z" />
    <Path d="M8 21v-9a4 4 0 1 1 8 0v9" />
    <Path d="M3 17h4" />
    <Path d="M17 17h4" />
    <Path d="M21 12h-4" />
    <Path d="M7 12h-4" />
    <Path d="M12 3v5" />
    <Path d="M6 6l3 3" />
    <Path d="M15 9l3 -3l-3 3z" />
  </Svg>
);
export default SvgBuildingTunnel;
