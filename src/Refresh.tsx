import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRefresh = (props: SvgProps) => (
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
    <Path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
    <Path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
  </Svg>
);
export default SvgRefresh;
