import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMath = (props: SvgProps) => (
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
    <Path d="M19 5h-7l-4 14l-3 -6h-2" />
    <Path d="M14 13l6 6" />
    <Path d="M14 19l6 -6" />
  </Svg>
);
export default SvgMath;
