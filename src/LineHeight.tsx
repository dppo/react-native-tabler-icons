import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLineHeight = (props: SvgProps) => (
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
    <Path d="M3 8l3 -3l3 3" />
    <Path d="M3 16l3 3l3 -3" />
    <Path d="M6 5l0 14" />
    <Path d="M13 6l7 0" />
    <Path d="M13 12l7 0" />
    <Path d="M13 18l7 0" />
  </Svg>
);
export default SvgLineHeight;
