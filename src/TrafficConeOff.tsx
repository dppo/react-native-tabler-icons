import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTrafficConeOff = (props: SvgProps) => (
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
    <Path d="M4 20h16" />
    <Path d="M9.4 10h.6m4 0h.6" />
    <Path d="M7.8 15h7.2" />
    <Path d="M6 20l3.5 -10.5" />
    <Path d="M10.5 6.5l.5 -1.5h2l2 6m2 6l1 3" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgTrafficConeOff;
