import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandVite = (props: SvgProps) => (
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
    <Path d="M10 4.5l6 -1.5l-2 6.5l2 -.5l-4 7v-5l-3 1z" />
    <Path d="M15 6.5l7 -1.5l-10 17l-10 -17l7.741 1.5" />
  </Svg>
);
export default SvgBrandVite;
