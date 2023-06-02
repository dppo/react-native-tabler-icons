import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHorseToy = (props: SvgProps) => (
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
    <Path d="M3.5 17.5c5.667 4.667 11.333 4.667 17 0" />
    <Path d="M19 18.5l-2 -8.5l1 -2l2 1l1.5 -1.5l-2.5 -4.5c-5.052 .218 -5.99 3.133 -7 6h-6a3 3 0 0 0 -3 3" />
    <Path d="M5 18.5l2 -9.5" />
    <Path d="M8 20l2 -5h4l2 5" />
  </Svg>
);
export default SvgHorseToy;
