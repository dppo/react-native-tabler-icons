import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCreditCard = (props: SvgProps) => (
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
    <Path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
    <Path d="M3 10l18 0" />
    <Path d="M7 15l.01 0" />
    <Path d="M11 15l2 0" />
  </Svg>
);
export default SvgCreditCard;
