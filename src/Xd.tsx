import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgXd = (props: SvgProps) => (
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
    <Path d="M6 8l4 8" />
    <Path d="M6 16l4 -8" />
    <Path d="M14 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2z" />
  </Svg>
);
export default SvgXd;
