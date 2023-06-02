import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCamper = (props: SvgProps) => (
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
    <Path d="M5 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <Path d="M15 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <Path d="M5 18h-1a1 1 0 0 1 -1 -1v-11a2 2 0 0 1 2 -2h12a4 4 0 0 1 4 4h-18" />
    <Path d="M9 18h6" />
    <Path d="M19 18h1a1 1 0 0 0 1 -1v-4l-3 -5" />
    <Path d="M21 13h-7" />
    <Path d="M14 8v10" />
  </Svg>
);
export default SvgCamper;
