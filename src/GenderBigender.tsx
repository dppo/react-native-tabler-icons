import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgGenderBigender = (props: SvgProps) => (
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
    <Path d="M11 11m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <Path d="M19 3l-5 5" />
    <Path d="M15 3h4v4" />
    <Path d="M11 16v6" />
    <Path d="M8 19h6" />
  </Svg>
);
export default SvgGenderBigender;
