import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgConePlus = (props: SvgProps) => (
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
    <Path d="M18.03 12.022l-5.16 -9.515a1 1 0 0 0 -1.74 0l-8.13 14.99v.5c0 1.66 4.03 3.003 9 3.003c.17 0 .34 -.002 .508 -.005" />
    <Path d="M16 19h6" />
    <Path d="M19 16v6" />
  </Svg>
);
export default SvgConePlus;
