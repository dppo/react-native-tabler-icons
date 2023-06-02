import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowsUp = (props: SvgProps) => (
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
    <Path d="M17 3l0 18" />
    <Path d="M4 6l3 -3l3 3" />
    <Path d="M20 6l-3 -3l-3 3" />
    <Path d="M7 3l0 18" />
  </Svg>
);
export default SvgArrowsUp;
