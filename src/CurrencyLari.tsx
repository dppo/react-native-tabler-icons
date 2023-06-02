import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencyLari = (props: SvgProps) => (
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
    <Path d="M18 13a6 6 0 1 0 -6 6" />
    <Path d="M6 19h12" />
    <Path d="M10 5v7" />
    <Path d="M14 12v-7" />
  </Svg>
);
export default SvgCurrencyLari;
