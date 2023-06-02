import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHome2 = (props: SvgProps) => (
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
    <Path d="M5 12l-2 0l9 -9l9 9l-2 0" />
    <Path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
    <Path d="M10 12h4v4h-4z" />
  </Svg>
);
export default SvgHome2;
