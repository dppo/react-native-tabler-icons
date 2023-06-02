import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCsv = (props: SvgProps) => (
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
    <Path d="M10 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1" />
    <Path d="M17 8l2 8l2 -8" />
    <Path d="M7 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0" />
  </Svg>
);
export default SvgCsv;
