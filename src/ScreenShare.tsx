import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgScreenShare = (props: SvgProps) => (
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
    <Path d="M21 12v3a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h9" />
    <Path d="M7 20l10 0" />
    <Path d="M9 16l0 4" />
    <Path d="M15 16l0 4" />
    <Path d="M17 4h4v4" />
    <Path d="M16 9l5 -5" />
  </Svg>
);
export default SvgScreenShare;
