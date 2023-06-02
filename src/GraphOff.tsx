import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgGraphOff = (props: SvgProps) => (
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
    <Path d="M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414a2 2 0 0 1 -1.414 .586h-12a2 2 0 0 1 -2 -2v-12c0 -.547 .22 -1.043 .576 -1.405" />
    <Path d="M7 14l3 -3l2 2l.5 -.5m2 -2l.5 -.5l2 2" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgGraphOff;
