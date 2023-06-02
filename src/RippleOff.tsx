import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRippleOff = (props: SvgProps) => (
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
    <Path d="M3 7c.915 -.61 1.83 -1.034 2.746 -1.272m4.212 .22c.68 .247 1.361 .598 2.042 1.052c3 2 6 2 9 0" />
    <Path d="M3 17c3 -2 6 -2 9 0c2.092 1.395 4.184 1.817 6.276 1.266" />
    <Path d="M3 12c3 -2 6 -2 9 0m5.482 1.429c1.173 -.171 2.345 -.647 3.518 -1.429" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgRippleOff;
