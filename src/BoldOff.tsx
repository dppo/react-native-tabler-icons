import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBoldOff = (props: SvgProps) => (
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
    <Path d="M9 5h4a3.5 3.5 0 0 1 2.222 6.204m-3.222 .796h-5v-5" />
    <Path d="M17.107 17.112a3.5 3.5 0 0 1 -3.107 1.888h-7v-7" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgBoldOff;
