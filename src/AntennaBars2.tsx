import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgAntennaBars2 = (props: SvgProps) => (
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
    <Path d="M6 18l0 -3" />
    <Path d="M10 18l0 .01" />
    <Path d="M14 18l0 .01" />
    <Path d="M18 18l0 .01" />
  </Svg>
);
export default SvgAntennaBars2;
