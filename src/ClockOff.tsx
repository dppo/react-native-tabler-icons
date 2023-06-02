import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgClockOff = (props: SvgProps) => (
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
    <Path d="M5.633 5.64a9 9 0 1 0 12.735 12.72m1.674 -2.32a9 9 0 0 0 -12.082 -12.082" />
    <Path d="M12 7v1" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgClockOff;
