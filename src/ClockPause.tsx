import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgClockPause = (props: SvgProps) => (
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
    <Path d="M20.942 13.018a9 9 0 1 0 -7.909 7.922" />
    <Path d="M12 7v5l2 2" />
    <Path d="M17 17v5" />
    <Path d="M21 17v5" />
  </Svg>
);
export default SvgClockPause;
