import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgError404Off = (props: SvgProps) => (
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
    <Path d="M3 7v4a1 1 0 0 0 1 1h3" />
    <Path d="M7 7v10" />
    <Path d="M10 10v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2m0 -4v-2a1 1 0 0 0 -1 -1h-2" />
    <Path d="M17 7v4a1 1 0 0 0 1 1h3" />
    <Path d="M21 7v10" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgError404Off;
