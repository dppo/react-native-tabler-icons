import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgInnerShadowBottom = (props: SvgProps) => (
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
    <Path d="M18.364 18.364a9 9 0 1 0 -12.728 -12.728a9 9 0 0 0 12.728 12.728z" />
    <Path d="M7.757 16.243a6 6 0 0 0 8.486 0" />
  </Svg>
);
export default SvgInnerShadowBottom;
