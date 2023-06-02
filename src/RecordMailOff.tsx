import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRecordMailOff = (props: SvgProps) => (
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
    <Path d="M7 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M18.569 14.557a3 3 0 1 0 -4.113 -4.149" />
    <Path d="M7 15h8" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgRecordMailOff;
