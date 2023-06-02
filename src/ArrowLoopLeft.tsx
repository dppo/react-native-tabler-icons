import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowLoopLeft = (props: SvgProps) => (
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
    <Path d="M13 21v-13a4 4 0 1 1 4 4h-13" />
    <Path d="M8 16l-4 -4l4 -4" />
  </Svg>
);
export default SvgArrowLoopLeft;
