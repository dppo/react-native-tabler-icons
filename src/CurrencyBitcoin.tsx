import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencyBitcoin = (props: SvgProps) => (
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
    <Path d="M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8" />
    <Path d="M8 6l0 12" />
    <Path d="M8 12l6 0" />
    <Path d="M9 3l0 3" />
    <Path d="M13 3l0 3" />
    <Path d="M9 18l0 3" />
    <Path d="M13 18l0 3" />
  </Svg>
);
export default SvgCurrencyBitcoin;
