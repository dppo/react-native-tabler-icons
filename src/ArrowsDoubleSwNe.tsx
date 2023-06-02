import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowsDoubleSwNe = (props: SvgProps) => (
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
    <Path d="M14 3l-11 11" />
    <Path d="M3 10v4h4" />
    <Path d="M17 10h4v4" />
    <Path d="M10 21l11 -11" />
  </Svg>
);
export default SvgArrowsDoubleSwNe;
