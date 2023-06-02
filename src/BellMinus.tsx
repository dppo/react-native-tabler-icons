import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBellMinus = (props: SvgProps) => (
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
    <Path d="M12.5 17h-8.5a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3c.047 .386 .149 .758 .3 1.107" />
    <Path d="M9 17v1a3 3 0 0 0 3.504 2.958" />
    <Path d="M16 19h6" />
  </Svg>
);
export default SvgBellMinus;
