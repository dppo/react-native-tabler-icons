import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowElbowRight = (props: SvgProps) => (
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
    <Path d="M21 14v-6h-6" />
    <Path d="M21 8l-9 9l-9 -9" />
  </Svg>
);
export default SvgArrowElbowRight;
