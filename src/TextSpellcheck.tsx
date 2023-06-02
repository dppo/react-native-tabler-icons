import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTextSpellcheck = (props: SvgProps) => (
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
    <Path d="M5 15v-7.5a3.5 3.5 0 0 1 7 0v7.5" />
    <Path d="M5 10h7" />
    <Path d="M10 18l3 3l7 -7" />
  </Svg>
);
export default SvgTextSpellcheck;
