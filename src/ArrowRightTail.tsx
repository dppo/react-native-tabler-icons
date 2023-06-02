import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowRightTail = (props: SvgProps) => (
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
    <Path d="M18 15l3 -3l-3 -3" />
    <Path d="M3 15l3 -3l-3 -3" />
    <Path d="M6 12l15 0" />
  </Svg>
);
export default SvgArrowRightTail;
