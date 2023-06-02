import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencyDirham = (props: SvgProps) => (
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
    <Path d="M8.5 19h-3.5" />
    <Path d="M8.599 16.479a1.5 1.5 0 1 0 -1.099 2.521" />
    <Path d="M7 4v9" />
    <Path d="M15 13h1.888a1.5 1.5 0 0 0 1.296 -2.256l-2.184 -3.744" />
    <Path d="M11 13.01v-.01" />
  </Svg>
);
export default SvgCurrencyDirham;
