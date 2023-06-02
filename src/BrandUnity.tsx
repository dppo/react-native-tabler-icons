import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandUnity = (props: SvgProps) => (
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
    <Path d="M14 3l6 4v7" />
    <Path d="M18 17l-6 4l-6 -4" />
    <Path d="M4 14v-7l6 -4" />
    <Path d="M4 7l8 5v9" />
    <Path d="M20 7l-8 5" />
  </Svg>
);
export default SvgBrandUnity;
