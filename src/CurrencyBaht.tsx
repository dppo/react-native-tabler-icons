import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencyBaht = (props: SvgProps) => (
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
    <Path d="M8 6h5a3 3 0 0 1 3 3v.143a2.857 2.857 0 0 1 -2.857 2.857h-5.143" />
    <Path d="M8 12h5a3 3 0 0 1 3 3v.143a2.857 2.857 0 0 1 -2.857 2.857h-5.143" />
    <Path d="M8 6v12" />
    <Path d="M11 4v2" />
    <Path d="M11 18v2" />
  </Svg>
);
export default SvgCurrencyBaht;
