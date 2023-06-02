import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgReportOff = (props: SvgProps) => (
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
    <Path d="M5.576 5.595a2 2 0 0 0 -.576 1.405v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2m0 -4v-8a2 2 0 0 0 -2 -2h-2" />
    <Path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 1 1 0 4h-2" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgReportOff;
