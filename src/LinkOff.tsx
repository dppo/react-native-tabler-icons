import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLinkOff = (props: SvgProps) => (
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
    <Path d="M9 15l3 -3m2 -2l1 -1" />
    <Path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
    <Path d="M3 3l18 18" />
    <Path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
  </Svg>
);
export default SvgLinkOff;
