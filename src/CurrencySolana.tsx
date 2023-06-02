import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencySolana = (props: SvgProps) => (
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
    <Path d="M4 18h12l4 -4h-12z" />
    <Path d="M8 14l-4 -4h12l4 4" />
    <Path d="M16 10l4 -4h-12l-4 4" />
  </Svg>
);
export default SvgCurrencySolana;
