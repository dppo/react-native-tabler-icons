import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandCpp = (props: SvgProps) => (
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
    <Path d="M18 12h4" />
    <Path d="M20 10v4" />
    <Path d="M11 12h4" />
    <Path d="M13 10v4" />
    <Path d="M9 9a3 3 0 0 0 -3 -3h-.5a3.5 3.5 0 0 0 -3.5 3.5v5a3.5 3.5 0 0 0 3.5 3.5h.5a3 3 0 0 0 3 -3" />
  </Svg>
);
export default SvgBrandCpp;
