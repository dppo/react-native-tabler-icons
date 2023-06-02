import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowNarrowRight = (props: SvgProps) => (
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
    <Path d="M5 12l14 0" />
    <Path d="M15 16l4 -4" />
    <Path d="M15 8l4 4" />
  </Svg>
);
export default SvgArrowNarrowRight;
