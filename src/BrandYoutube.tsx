import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandYoutube = (props: SvgProps) => (
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
    <Path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
    <Path d="M10 9l5 3l-5 3z" />
  </Svg>
);
export default SvgBrandYoutube;
