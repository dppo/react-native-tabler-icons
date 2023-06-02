import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowUpRight = (props: SvgProps) => (
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
    <Path d="M17 7l-10 10" />
    <Path d="M8 7l9 0l0 9" />
  </Svg>
);
export default SvgArrowUpRight;
