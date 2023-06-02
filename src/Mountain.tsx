import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMountain = (props: SvgProps) => (
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
    <Path d="M3 20h18l-6.921 -14.612a2.3 2.3 0 0 0 -4.158 0l-6.921 14.612z" />
    <Path d="M7.5 11l2 2.5l2.5 -2.5l2 3l2.5 -2" />
  </Svg>
);
export default SvgMountain;
