import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgWorldCheck = (props: SvgProps) => (
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
    <Path d="M20.946 12.99a9 9 0 1 0 -9.46 7.995" />
    <Path d="M3.6 9h16.8" />
    <Path d="M3.6 15h13.9" />
    <Path d="M11.5 3a17 17 0 0 0 0 18" />
    <Path d="M12.5 3a16.997 16.997 0 0 1 2.311 12.001" />
    <Path d="M15 19l2 2l4 -4" />
  </Svg>
);
export default SvgWorldCheck;
