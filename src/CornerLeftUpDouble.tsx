import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCornerLeftUpDouble = (props: SvgProps) => (
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
    <Path d="M18 19h-6a3 3 0 0 1 -3 -3v-7" />
    <Path d="M13 13l-4 -4l-4 4m8 -5l-4 -4l-4 4" />
  </Svg>
);
export default SvgCornerLeftUpDouble;
