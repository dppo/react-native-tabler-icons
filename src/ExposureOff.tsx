import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgExposureOff = (props: SvgProps) => (
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
    <Path d="M4.6 19.4l7.4 -7.4m2 -2l5.4 -5.4" />
    <Path d="M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414a2 2 0 0 1 -1.414 .586h-12a2 2 0 0 1 -2 -2v-12c0 -.547 .22 -1.043 .576 -1.405" />
    <Path d="M7 9h2v2" />
    <Path d="M13 16h3" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgExposureOff;
