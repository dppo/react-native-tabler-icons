import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgGlobeOff = (props: SvgProps) => (
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
    <Path d="M8.36 8.339a4 4 0 0 0 5.281 5.31m2 -1.98a4 4 0 0 0 -5.262 -5.325" />
    <Path d="M6.75 16a8.015 8.015 0 0 0 9.799 .553m2.016 -2a8.015 8.015 0 0 0 -2.565 -11.555" />
    <Path d="M12 18v4" />
    <Path d="M8 22h8" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgGlobeOff;
