import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBracketsContainEnd = (props: SvgProps) => (
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
    <Path d="M14 4h4v16h-4" />
    <Path d="M5 16h.01" />
    <Path d="M9 16h.01" />
    <Path d="M13 16h.01" />
  </Svg>
);
export default SvgBracketsContainEnd;
