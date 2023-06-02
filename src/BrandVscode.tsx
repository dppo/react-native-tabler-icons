import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandVscode = (props: SvgProps) => (
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
    <Path d="M16 3v18l4 -2.5v-13z" />
    <Path d="M9.165 13.903l-4.165 3.597l-2 -1l4.333 -4.5m1.735 -1.802l6.932 -7.198v5l-4.795 4.141" />
    <Path d="M16 16.5l-11 -10l-2 1l13 13.5" />
  </Svg>
);
export default SvgBrandVscode;
