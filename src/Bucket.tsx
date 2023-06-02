import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBucket = (props: SvgProps) => (
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
    <Path d="M12 7m-8 0a8 4 0 1 0 16 0a8 4 0 1 0 -16 0" />
    <Path d="M4 7c0 .664 .088 1.324 .263 1.965l2.737 10.035c.5 1.5 2.239 2 5 2s4.5 -.5 5 -2c.333 -1 1.246 -4.345 2.737 -10.035a7.45 7.45 0 0 0 .263 -1.965" />
  </Svg>
);
export default SvgBucket;
