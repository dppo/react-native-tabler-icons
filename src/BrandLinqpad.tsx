import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandLinqpad = (props: SvgProps) => (
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
    <Path d="M5 21h3.5l2.5 -6l2.5 -1l2.5 7h4l1 -4.5l-2 -1l-7 -12l-6 -.5l1.5 4l2.5 .5l1 2.5l-7 8z" />
  </Svg>
);
export default SvgBrandLinqpad;
