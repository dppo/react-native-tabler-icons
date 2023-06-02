import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencyShekel = (props: SvgProps) => (
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
    <Path d="M6 18v-12h4a4 4 0 0 1 4 4v4" />
    <Path d="M18 6v12h-4a4 4 0 0 1 -4 -4v-4" />
  </Svg>
);
export default SvgCurrencyShekel;
