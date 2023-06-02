import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandBulma = (props: SvgProps) => (
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
    <Path d="M5 16l1 -9l5 -5l6.5 6l-3.5 4l5 5l-8 5z" />
  </Svg>
);
export default SvgBrandBulma;
