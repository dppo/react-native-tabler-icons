import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencyForint = (props: SvgProps) => (
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
    <Path d="M11 4h-4a3 3 0 0 0 -3 3v12" />
    <Path d="M10 11h-6" />
    <Path d="M16 4v13a2 2 0 0 0 2 2h2" />
    <Path d="M19 9h-5" />
  </Svg>
);
export default SvgCurrencyForint;
