import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgExternalLinkOff = (props: SvgProps) => (
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
    <Path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
    <Path d="M10 14l2 -2m2.007 -2.007l6 -6" />
    <Path d="M15 4h5v5" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgExternalLinkOff;
