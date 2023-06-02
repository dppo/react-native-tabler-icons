import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgList = (props: SvgProps) => (
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
    <Path d="M9 6l11 0" />
    <Path d="M9 12l11 0" />
    <Path d="M9 18l11 0" />
    <Path d="M5 6l0 .01" />
    <Path d="M5 12l0 .01" />
    <Path d="M5 18l0 .01" />
  </Svg>
);
export default SvgList;
