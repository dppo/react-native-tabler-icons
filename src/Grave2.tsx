import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgGrave2 = (props: SvgProps) => (
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
    <Path d="M7 16.17v-9.17a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3v9.171" />
    <Path d="M12 7v5" />
    <Path d="M10 9h4" />
    <Path d="M5 21v-2a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v2h-14z" />
  </Svg>
);
export default SvgGrave2;
