import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandWindy = (props: SvgProps) => (
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
    <Path d="M9 4c0 5.5 -.33 16 4 16s7.546 -11.27 8 -13" />
    <Path d="M3 4c.253 5.44 1.449 16 5.894 16c4.444 0 8.42 -10.036 9.106 -14" />
  </Svg>
);
export default SvgBrandWindy;
