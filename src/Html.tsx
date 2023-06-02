import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHtml = (props: SvgProps) => (
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
    <Path d="M13 16v-8l2 5l2 -5v8" />
    <Path d="M1 16v-8" />
    <Path d="M5 8v8" />
    <Path d="M1 12h4" />
    <Path d="M7 8h4" />
    <Path d="M9 8v8" />
    <Path d="M20 8v8h3" />
  </Svg>
);
export default SvgHtml;
