import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBracketsOff = (props: SvgProps) => (
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
    <Path d="M5 5v15h3" />
    <Path d="M16 4h3v11m0 4v1h-3" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgBracketsOff;
