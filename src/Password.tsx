import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPassword = (props: SvgProps) => (
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
    <Path d="M12 10v4" />
    <Path d="M10 13l4 -2" />
    <Path d="M10 11l4 2" />
    <Path d="M5 10v4" />
    <Path d="M3 13l4 -2" />
    <Path d="M3 11l4 2" />
    <Path d="M19 10v4" />
    <Path d="M17 13l4 -2" />
    <Path d="M17 11l4 2" />
  </Svg>
);
export default SvgPassword;
