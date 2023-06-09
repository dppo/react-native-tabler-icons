import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgGenderIntergender = (props: SvgProps) => (
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
    <Path d="M13.5 11.5l6.5 6.5v-4" />
    <Path d="M11.5 13.5l6.5 6.5" />
    <Path d="M9 4a5 5 0 1 1 0 10a5 5 0 0 1 0 -10z" />
    <Path d="M14 20l2 -2" />
  </Svg>
);
export default SvgGenderIntergender;
