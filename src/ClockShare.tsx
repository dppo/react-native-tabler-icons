import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgClockShare = (props: SvgProps) => (
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
    <Path d="M20.943 13.016a9 9 0 1 0 -8.915 7.984" />
    <Path d="M16 22l5 -5" />
    <Path d="M21 21.5v-4.5h-4.5" />
    <Path d="M12 7v5l2 2" />
  </Svg>
);
export default SvgClockShare;
