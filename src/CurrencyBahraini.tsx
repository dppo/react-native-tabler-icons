import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencyBahraini = (props: SvgProps) => (
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
    <Path d="M3 10v1a4 4 0 0 0 4 4h2a2 2 0 0 0 2 -2v-3" />
    <Path d="M7 19.01v-.01" />
    <Path d="M14 15.01v-.01" />
    <Path d="M17 15h2a2 2 0 0 0 1.649 -3.131l-2.653 -3.869" />
  </Svg>
);
export default SvgCurrencyBahraini;
