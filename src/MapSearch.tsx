import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMapSearch = (props: SvgProps) => (
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
    <Path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v8" />
    <Path d="M9 4v13" />
    <Path d="M15 7v5" />
    <Path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M20.2 20.2l1.8 1.8" />
  </Svg>
);
export default SvgMapSearch;
