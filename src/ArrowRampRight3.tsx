import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowRampRight3 = (props: SvgProps) => (
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
    <Path d="M6 3v6" />
    <Path d="M16 16l4 -4l-4 -4" />
    <Path d="M6 21v-6a3 3 0 0 1 3 -3h11" />
  </Svg>
);
export default SvgArrowRampRight3;
