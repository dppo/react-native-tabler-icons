import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowsDoubleNeSw = (props: SvgProps) => (
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
    <Path d="M3 14l11 -11" />
    <Path d="M10 3h4v4" />
    <Path d="M10 17v4h4" />
    <Path d="M21 10l-11 11" />
  </Svg>
);
export default SvgArrowsDoubleNeSw;
