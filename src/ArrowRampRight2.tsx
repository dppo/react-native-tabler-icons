import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowRampRight2 = (props: SvgProps) => (
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
    <Path d="M6 3v8.707" />
    <Path d="M16 14l4 -4l-4 -4" />
    <Path d="M6 21c0 -6.075 4.925 -11 11 -11h3" />
  </Svg>
);
export default SvgArrowRampRight2;
