import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgShovel = (props: SvgProps) => (
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
    <Path d="M17 4l3 3" />
    <Path d="M18.5 5.5l-8 8" />
    <Path d="M8.276 11.284l4.44 4.44a.968 .968 0 0 1 0 1.369l-2.704 2.704a4.108 4.108 0 0 1 -5.809 -5.81l2.704 -2.703a.968 .968 0 0 1 1.37 0z" />
  </Svg>
);
export default SvgShovel;
