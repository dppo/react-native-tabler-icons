import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCreativeCommonsOff = (props: SvgProps) => (
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
    <Path d="M5.638 5.634a9 9 0 1 0 12.723 12.733m1.686 -2.332a9 9 0 0 0 -12.093 -12.077" />
    <Path d="M10.5 10.5a2.187 2.187 0 0 0 -2.914 .116a1.928 1.928 0 0 0 0 2.768a2.188 2.188 0 0 0 2.914 .116" />
    <Path d="M16.5 10.5a2.194 2.194 0 0 0 -2.309 -.302" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgCreativeCommonsOff;
