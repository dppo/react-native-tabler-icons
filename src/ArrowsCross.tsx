import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowsCross = (props: SvgProps) => (
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
    <Path d="M16 4h4v4" />
    <Path d="M15 9l5 -5" />
    <Path d="M4 20l5 -5" />
    <Path d="M16 20h4v-4" />
    <Path d="M4 4l16 16" />
  </Svg>
);
export default SvgArrowsCross;
