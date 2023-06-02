import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandVue = (props: SvgProps) => (
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
    <Path d="M16.5 4l-4.5 8l-4.5 -8" />
    <Path d="M3 4l9 16l9 -16" />
  </Svg>
);
export default SvgBrandVue;
