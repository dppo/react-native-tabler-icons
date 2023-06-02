import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowLeftTail = (props: SvgProps) => (
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
    <Path d="M18 12h-15" />
    <Path d="M6 9l-3 3l3 3" />
    <Path d="M21 9l-3 3l3 3" />
  </Svg>
);
export default SvgArrowLeftTail;
