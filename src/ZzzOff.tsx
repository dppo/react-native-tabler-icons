import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgZzzOff = (props: SvgProps) => (
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
    <Path d="M4 12h6l-6 8h6" />
    <Path d="M14 4h6l-5.146 6.862m1.146 1.138h4" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgZzzOff;
