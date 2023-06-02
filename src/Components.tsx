import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponents = (props: SvgProps) => (
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
    <Path d="M3 12l3 3l3 -3l-3 -3z" />
    <Path d="M15 12l3 3l3 -3l-3 -3z" />
    <Path d="M9 6l3 3l3 -3l-3 -3z" />
    <Path d="M9 18l3 3l3 -3l-3 -3z" />
  </Svg>
);
export default SvgComponents;
