import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencyReal = (props: SvgProps) => (
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
    <Path d="M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4" />
    <Path d="M4 18v-12h3a3 3 0 1 1 0 6h-3c5.5 0 5 4 6 6" />
    <Path d="M18 6v-2" />
    <Path d="M17 20v-2" />
  </Svg>
);
export default SvgCurrencyReal;
