import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBroadcastOff = (props: SvgProps) => (
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
    <Path d="M18.364 19.364a9 9 0 0 0 -9.721 -14.717m-2.488 1.509a9 9 0 0 0 -.519 13.208" />
    <Path d="M15.536 16.536a5 5 0 0 0 -3.536 -8.536m-3 1a5 5 0 0 0 -.535 7.536" />
    <Path d="M12 12a1 1 0 1 0 1 1" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgBroadcastOff;
