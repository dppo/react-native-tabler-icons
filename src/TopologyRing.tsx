import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTopologyRing = (props: SvgProps) => (
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
    <Path d="M14 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <Path d="M14 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <Path d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <Path d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <Path d="M13.5 5.5l5 5" />
    <Path d="M5.5 13.5l5 5" />
    <Path d="M13.5 18.5l5 -5" />
    <Path d="M10.5 5.5l-5 5" />
  </Svg>
);
export default SvgTopologyRing;
