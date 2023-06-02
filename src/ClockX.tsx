import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgClockX = (props: SvgProps) => (
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
    <Path d="M20.926 13.15a9 9 0 1 0 -7.835 7.784" />
    <Path d="M12 7v5l2 2" />
    <Path d="M22 22l-5 -5" />
    <Path d="M17 22l5 -5" />
  </Svg>
);
export default SvgClockX;
