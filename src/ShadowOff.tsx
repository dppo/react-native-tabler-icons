import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgShadowOff = (props: SvgProps) => (
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
    <Path d="M5.634 5.638a9 9 0 0 0 12.728 12.727m1.68 -2.32a9 9 0 0 0 -12.086 -12.088" />
    <Path d="M16 12h2" />
    <Path d="M13 15h2" />
    <Path d="M13 18h1" />
    <Path d="M13 9h4" />
    <Path d="M13 6h1" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgShadowOff;
