import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencyFrank = (props: SvgProps) => (
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
    <Path d="M17 5h-6a2 2 0 0 0 -2 2v12" />
    <Path d="M7 15h4" />
    <Path d="M9 11h7" />
  </Svg>
);
export default SvgCurrencyFrank;
