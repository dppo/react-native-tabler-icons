import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencyDogecoin = (props: SvgProps) => (
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
    <Path d="M6 12h6" />
    <Path d="M9 6v12" />
    <Path d="M6 18h6a6 6 0 1 0 0 -12h-6" />
  </Svg>
);
export default SvgCurrencyDogecoin;
