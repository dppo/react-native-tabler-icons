import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencyWon = (props: SvgProps) => (
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
    <Path d="M4 6l3.245 11.358a.85 .85 0 0 0 1.624 .035l3.131 -9.393l3.131 9.393a.85 .85 0 0 0 1.624 -.035l3.245 -11.358" />
    <Path d="M21 10h-18" />
    <Path d="M21 14h-18" />
  </Svg>
);
export default SvgCurrencyWon;
