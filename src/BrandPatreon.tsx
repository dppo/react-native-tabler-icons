import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandPatreon = (props: SvgProps) => (
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
    <Path d="M3 3h3v18h-3z" />
    <Path d="M15 9.5m-6.5 0a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0 -13 0" />
  </Svg>
);
export default SvgBrandPatreon;
