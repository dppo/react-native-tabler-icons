import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgUnderline = (props: SvgProps) => (
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
    <Path d="M7 5v5a5 5 0 0 0 10 0v-5" />
    <Path d="M5 19h14" />
  </Svg>
);
export default SvgUnderline;
