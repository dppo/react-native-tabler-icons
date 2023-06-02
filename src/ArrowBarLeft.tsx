import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowBarLeft = (props: SvgProps) => (
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
    <Path d="M4 12l10 0" />
    <Path d="M4 12l4 4" />
    <Path d="M4 12l4 -4" />
    <Path d="M20 4l0 16" />
  </Svg>
);
export default SvgArrowBarLeft;
