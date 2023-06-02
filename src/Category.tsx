import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCategory = (props: SvgProps) => (
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
    <Path d="M4 4h6v6h-6z" />
    <Path d="M14 4h6v6h-6z" />
    <Path d="M4 14h6v6h-6z" />
    <Path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  </Svg>
);
export default SvgCategory;
