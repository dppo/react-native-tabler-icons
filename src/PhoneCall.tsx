import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPhoneCall = (props: SvgProps) => (
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
    <Path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
    <Path d="M15 7a2 2 0 0 1 2 2" />
    <Path d="M15 3a6 6 0 0 1 6 6" />
  </Svg>
);
export default SvgPhoneCall;
