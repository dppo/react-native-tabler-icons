import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFlipHorizontal = (props: SvgProps) => (
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
    <Path d="M3 12l18 0" />
    <Path d="M7 16l10 0l-10 5l0 -5" />
    <Path d="M7 8l10 0l-10 -5l0 5" />
  </Svg>
);
export default SvgFlipHorizontal;
