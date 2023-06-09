import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgAwardOff = (props: SvgProps) => (
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
    <Path d="M16.72 12.704a6 6 0 0 0 -8.433 -8.418m-1.755 2.24a6 6 0 0 0 7.936 7.944" />
    <Path d="M12 15l3.4 5.89l1.598 -3.233l.707 .046m1.108 -2.902l-1.617 -2.8" />
    <Path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgAwardOff;
