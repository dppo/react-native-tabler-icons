import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencyZloty = (props: SvgProps) => (
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
    <Path d="M12 18h-7l7 -7h-7" />
    <Path d="M17 18v-13" />
    <Path d="M14 14.5l6 -3.5" />
  </Svg>
);
export default SvgCurrencyZloty;
