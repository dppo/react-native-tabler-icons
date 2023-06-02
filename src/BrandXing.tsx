import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandXing = (props: SvgProps) => (
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
    <Path d="M16 21l-4 -7l6.5 -11" />
    <Path d="M7 7l2 3.5l-3 4.5" />
  </Svg>
);
export default SvgBrandXing;
