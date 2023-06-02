import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowElbowLeft = (props: SvgProps) => (
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
    <Path d="M3 14v-6h6" />
    <Path d="M3 8l9 9l9 -9" />
  </Svg>
);
export default SvgArrowElbowLeft;
