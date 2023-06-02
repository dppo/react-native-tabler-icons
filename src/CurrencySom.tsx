import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencySom = (props: SvgProps) => (
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
    <Path d="M10 18v-12h-5v10a2 2 0 0 1 -2 2" />
    <Path d="M14 6v12h4a3 3 0 0 0 0 -6h-4h4a3 3 0 0 0 0 -6h-4z" />
  </Svg>
);
export default SvgCurrencySom;
