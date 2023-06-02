import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowRampLeft2 = (props: SvgProps) => (
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
    <Path d="M18 3v8.707" />
    <Path d="M8 14l-4 -4l4 -4" />
    <Path d="M18 21c0 -6.075 -4.925 -11 -11 -11h-3" />
  </Svg>
);
export default SvgArrowRampLeft2;
