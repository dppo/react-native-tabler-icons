import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencyLitecoin = (props: SvgProps) => (
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
    <Path d="M18 19h-8.194a2 2 0 0 1 -1.98 -2.283l1.674 -11.717" />
    <Path d="M14 9l-9 4" />
  </Svg>
);
export default SvgCurrencyLitecoin;
