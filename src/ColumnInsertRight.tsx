import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgColumnInsertRight = (props: SvgProps) => (
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
    <Path d="M6 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1z" />
    <Path d="M15 12l4 0" />
    <Path d="M17 10l0 4" />
  </Svg>
);
export default SvgColumnInsertRight;
