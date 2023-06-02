import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBong = (props: SvgProps) => (
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
    <Path d="M13 3v8.416c.134 .059 .265 .123 .393 .193l3.607 -3.609l2 2l-3.608 3.608a5 5 0 1 1 -6.392 -2.192v-8.416h4z" />
    <Path d="M8 3h6" />
    <Path d="M6.1 17h9.8" />
  </Svg>
);
export default SvgBong;
