import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencyTaka = (props: SvgProps) => (
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
    <Path d="M16.5 15.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M7 7a2 2 0 1 1 4 0v9a3 3 0 0 0 6 0v-.5" />
    <Path d="M8 11h6" />
  </Svg>
);
export default SvgCurrencyTaka;
