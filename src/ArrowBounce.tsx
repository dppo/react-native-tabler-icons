import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowBounce = (props: SvgProps) => (
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
    <Path d="M10 18h4" />
    <Path d="M3 8a9 9 0 0 1 9 9v1l1.428 -4.285a12 12 0 0 1 6.018 -6.938l.554 -.277" />
    <Path d="M15 6h5v5" />
  </Svg>
);
export default SvgArrowBounce;
