import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencyRenminbi = (props: SvgProps) => (
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
    <Path d="M15 9v8a2 2 0 1 0 4 0" />
    <Path d="M19 9h-14" />
    <Path d="M19 5h-14" />
    <Path d="M9 9v4c0 2.5 -.667 4 -2 6" />
  </Svg>
);
export default SvgCurrencyRenminbi;
