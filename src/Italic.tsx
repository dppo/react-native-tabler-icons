import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgItalic = (props: SvgProps) => (
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
    <Path d="M11 5l6 0" />
    <Path d="M7 19l6 0" />
    <Path d="M14 5l-4 14" />
  </Svg>
);
export default SvgItalic;
