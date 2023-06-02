import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencyPeso = (props: SvgProps) => (
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
    <Path d="M8 19v-14h3.5a4.5 4.5 0 1 1 0 9h-3.5" />
    <Path d="M18 8h-12" />
    <Path d="M18 11h-12" />
  </Svg>
);
export default SvgCurrencyPeso;
