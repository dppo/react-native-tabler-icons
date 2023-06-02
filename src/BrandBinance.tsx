import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandBinance = (props: SvgProps) => (
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
    <Path d="M6 8l2 2l4 -4l4 4l2 -2l-6 -6z" />
    <Path d="M6 16l2 -2l4 4l3.5 -3.5l2 2l-5.5 5.5z" />
    <Path d="M20 10l2 2l-2 2l-2 -2z" />
    <Path d="M4 10l2 2l-2 2l-2 -2z" />
    <Path d="M12 10l2 2l-2 2l-2 -2z" />
  </Svg>
);
export default SvgBrandBinance;
