import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRadiusTopRight = (props: SvgProps) => (
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
    <Path d="M5 5h6a8 8 0 0 1 8 8v6" />
  </Svg>
);
export default SvgRadiusTopRight;
