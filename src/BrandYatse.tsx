import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandYatse = (props: SvgProps) => (
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
    <Path d="M7 3l5 2.876v5.088l4.197 -2.73l4.803 2.731l-9.281 5.478l-2.383 1.41l-2.334 1.377l-3 1.77v-5.565l3 -1.771z" />
  </Svg>
);
export default SvgBrandYatse;
