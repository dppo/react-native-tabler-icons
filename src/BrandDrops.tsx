import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandDrops = (props: SvgProps) => (
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
    <Path d="M17.637 7.416a7.907 7.907 0 0 1 1.76 8.666a8 8 0 0 1 -7.397 4.918a8 8 0 0 1 -7.396 -4.918a7.907 7.907 0 0 1 1.759 -8.666l5.637 -5.416l5.637 5.416z" />
    <Path d="M14.466 10.923a3.595 3.595 0 0 1 .77 3.877a3.5 3.5 0 0 1 -3.236 2.2a3.5 3.5 0 0 1 -3.236 -2.2a3.595 3.595 0 0 1 .77 -3.877l2.466 -2.423l2.466 2.423z" />
  </Svg>
);
export default SvgBrandDrops;
