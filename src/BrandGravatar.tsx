import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandGravatar = (props: SvgProps) => (
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
    <Path d="M5.64 5.632a9 9 0 1 0 6.36 -2.632v7.714" />
  </Svg>
);
export default SvgBrandGravatar;
