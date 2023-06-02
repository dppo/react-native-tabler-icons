import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPillOff = (props: SvgProps) => (
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
    <Path d="M10.495 6.505l2 -2a4.95 4.95 0 0 1 7 7l-2 2m-2 2l-4 4a4.95 4.95 0 0 1 -7 -7l4 -4" />
    <Path d="M8.5 8.5l7 7" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgPillOff;
