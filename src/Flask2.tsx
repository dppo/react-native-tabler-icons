import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFlask2 = (props: SvgProps) => (
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
    <Path d="M6.1 15h11.8" />
    <Path d="M14 3v7.342a6 6 0 0 1 1.318 10.658h-6.635a6 6 0 0 1 1.317 -10.66v-7.34h4z" />
    <Path d="M9 3h6" />
  </Svg>
);
export default SvgFlask2;
