import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgGenderThird = (props: SvgProps) => (
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
    <Path d="M11 12a5 5 0 1 0 10 0a5 5 0 0 0 -10 0z" />
    <Path d="M11 12h-3" />
    <Path d="M8 12l-5 -4v8z" />
  </Svg>
);
export default SvgGenderThird;
