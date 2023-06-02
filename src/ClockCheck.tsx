import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgClockCheck = (props: SvgProps) => (
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
    <Path d="M20.942 13.021a9 9 0 1 0 -9.407 7.967" />
    <Path d="M12 7v5l3 3" />
    <Path d="M15 19l2 2l4 -4" />
  </Svg>
);
export default SvgClockCheck;
