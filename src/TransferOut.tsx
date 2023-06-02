import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTransferOut = (props: SvgProps) => (
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
    <Path d="M4 19v2h16v-14l-8 -4l-8 4v2" />
    <Path d="M13 14h-9" />
    <Path d="M7 11l-3 3l3 3" />
  </Svg>
);
export default SvgTransferOut;
