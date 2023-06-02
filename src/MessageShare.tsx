import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMessageShare = (props: SvgProps) => (
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
    <Path d="M8 9h8" />
    <Path d="M8 13h6" />
    <Path d="M13 18l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6" />
    <Path d="M16 22l5 -5" />
    <Path d="M21 21.5v-4.5h-4.5" />
  </Svg>
);
export default SvgMessageShare;
