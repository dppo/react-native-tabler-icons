import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLoader3 = (props: SvgProps) => (
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
    <Path d="M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9" />
    <Path d="M17 12a5 5 0 1 0 -5 5" />
  </Svg>
);
export default SvgLoader3;
