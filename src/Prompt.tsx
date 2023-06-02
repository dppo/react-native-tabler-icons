import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPrompt = (props: SvgProps) => (
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
    <Path d="M5 7l5 5l-5 5" />
    <Path d="M13 17l6 0" />
  </Svg>
);
export default SvgPrompt;
