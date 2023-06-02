import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgChefHatOff = (props: SvgProps) => (
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
    <Path d="M8.72 4.712a4 4 0 0 1 7.19 1.439a4 4 0 0 1 2.09 7.723v.126m0 4v3h-12v-7.126a4 4 0 0 1 .081 -7.796" />
    <Path d="M6.161 17.009l10.839 -.009" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgChefHatOff;
