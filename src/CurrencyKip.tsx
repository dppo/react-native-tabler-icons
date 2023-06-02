import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencyKip = (props: SvgProps) => (
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
    <Path d="M6 12h12" />
    <Path d="M9 5v14" />
    <Path d="M16 19a7 7 0 0 0 -7 -7a7 7 0 0 0 7 -7" />
  </Svg>
);
export default SvgCurrencyKip;
