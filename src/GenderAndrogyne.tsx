import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgGenderAndrogyne = (props: SvgProps) => (
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
    <Path d="M13 11l6 -6" />
    <Path d="M9 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
    <Path d="M19 9v-4h-4" />
    <Path d="M16.5 10.5l-3 -3" />
  </Svg>
);
export default SvgGenderAndrogyne;
