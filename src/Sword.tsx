import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSword = (props: SvgProps) => (
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
    <Path d="M20 4v5l-9 7l-4 4l-3 -3l4 -4l7 -9z" />
    <Path d="M6.5 11.5l6 6" />
  </Svg>
);
export default SvgSword;
