import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgScaleOff = (props: SvgProps) => (
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
    <Path d="M7 20h10" />
    <Path d="M9.452 5.425l2.548 -.425l6 1" />
    <Path d="M12 3v5m0 4v8" />
    <Path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
    <Path d="M18.873 14.871a3 3 0 0 0 2.127 -2.871l-3 -6l-2.677 5.355" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgScaleOff;
