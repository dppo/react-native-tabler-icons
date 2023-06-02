import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPennant2 = (props: SvgProps) => (
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
    <Path d="M16 21h-4" />
    <Path d="M14 21v-18" />
    <Path d="M14 4l-9 4l9 4" />
  </Svg>
);
export default SvgPennant2;
