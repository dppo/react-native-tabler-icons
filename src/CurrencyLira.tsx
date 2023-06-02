import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencyLira = (props: SvgProps) => (
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
    <Path d="M10 5v15a7 7 0 0 0 7 -7" />
    <Path d="M6 15l8 -4" />
    <Path d="M14 7l-8 4" />
  </Svg>
);
export default SvgCurrencyLira;
