import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTexture = (props: SvgProps) => (
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
    <Path d="M6 3l-3 3" />
    <Path d="M21 18l-3 3" />
    <Path d="M11 3l-8 8" />
    <Path d="M16 3l-13 13" />
    <Path d="M21 3l-18 18" />
    <Path d="M21 8l-13 13" />
    <Path d="M21 13l-8 8" />
  </Svg>
);
export default SvgTexture;
