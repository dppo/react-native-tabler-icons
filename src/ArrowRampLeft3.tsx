import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowRampLeft3 = (props: SvgProps) => (
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
    <Path d="M18 3v6" />
    <Path d="M8 16l-4 -4l4 -4" />
    <Path d="M18 21v-6a3 3 0 0 0 -3 -3h-11" />
  </Svg>
);
export default SvgArrowRampLeft3;
