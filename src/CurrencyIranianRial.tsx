import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencyIranianRial = (props: SvgProps) => (
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
    <Path d="M9 4v9a2 2 0 0 1 -2 2h-1a3 3 0 0 1 -3 -3v-1" />
    <Path d="M12 5v8a1 1 0 0 0 1 1h1a2 2 0 0 0 2 -2v-1" />
    <Path d="M21 14v1.096a5 5 0 0 1 -3.787 4.85l-.213 .054" />
    <Path d="M11 18h.01" />
    <Path d="M14 18h.01" />
  </Svg>
);
export default SvgCurrencyIranianRial;
