import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgGrave = (props: SvgProps) => (
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
    <Path d="M5 21v-2a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v2h-14z" />
    <Path d="M10 16v-5h-4v-4h4v-4h4v4h4v4h-4v5" />
  </Svg>
);
export default SvgGrave;
