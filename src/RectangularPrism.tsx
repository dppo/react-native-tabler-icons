import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRectangularPrism = (props: SvgProps) => (
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
    <Path d="M21 14.008v-5.018a1.98 1.98 0 0 0 -1 -1.717l-4 -2.008a2.016 2.016 0 0 0 -2 0l-10 5.008c-.619 .355 -1 1.01 -1 1.718v5.018c0 .709 .381 1.363 1 1.717l4 2.008a2.016 2.016 0 0 0 2 0l10 -5.008c.619 -.355 1 -1.01 1 -1.718z" />
    <Path d="M9 21v-7.5" />
    <Path d="M9 13.5l11.5 -5.5" />
    <Path d="M3.5 11l5.5 2.5" />
  </Svg>
);
export default SvgRectangularPrism;
