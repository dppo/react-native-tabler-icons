import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgToml = (props: SvgProps) => (
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
    <Path d="M1.499 8h3" />
    <Path d="M2.999 8v8" />
    <Path d="M8.5 8a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1 -3 0v-5a1.5 1.5 0 0 1 1.5 -1.5z" />
    <Path d="M13 16v-8l2 5l2 -5v8" />
    <Path d="M20 8v8h2.5" />
  </Svg>
);
export default SvgToml;
