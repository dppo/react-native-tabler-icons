import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgClockUp = (props: SvgProps) => (
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
    <Path d="M20.983 12.548a9 9 0 1 0 -8.45 8.436" />
    <Path d="M19 22v-6" />
    <Path d="M22 19l-3 -3l-3 3" />
    <Path d="M12 7v5l2.5 2.5" />
  </Svg>
);
export default SvgClockUp;
