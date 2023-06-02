import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLineDashed = (props: SvgProps) => (
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
    <Path d="M5 12h2" />
    <Path d="M17 12h2" />
    <Path d="M11 12h2" />
  </Svg>
);
export default SvgLineDashed;
