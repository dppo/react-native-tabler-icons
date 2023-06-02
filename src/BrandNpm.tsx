import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandNpm = (props: SvgProps) => (
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
    <Path d="M1 8h22v7h-12v2h-4v-2h-6z" />
    <Path d="M7 8v7" />
    <Path d="M14 8v7" />
    <Path d="M17 11v4" />
    <Path d="M4 11v4" />
    <Path d="M11 11v1" />
    <Path d="M20 11v4" />
  </Svg>
);
export default SvgBrandNpm;
