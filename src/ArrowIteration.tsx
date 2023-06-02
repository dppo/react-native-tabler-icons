import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowIteration = (props: SvgProps) => (
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
    <Path d="M8.5 16a5.5 5.5 0 1 0 -5.5 -5.5v.5" />
    <Path d="M3 16h18" />
    <Path d="M18 13l3 3l-3 3" />
  </Svg>
);
export default SvgArrowIteration;
