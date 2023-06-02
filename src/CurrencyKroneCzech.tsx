import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencyKroneCzech = (props: SvgProps) => (
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
    <Path d="M5 6v12" />
    <Path d="M5 12c3.5 0 6 -3 6 -6" />
    <Path d="M5 12c3.5 0 6 3 6 6" />
    <Path d="M19 6l-2 2l-2 -2" />
    <Path d="M19 12h-2a3 3 0 0 0 0 6h2" />
  </Svg>
);
export default SvgCurrencyKroneCzech;
