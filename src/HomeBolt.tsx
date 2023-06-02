import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHomeBolt = (props: SvgProps) => (
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
    <Path d="M19 10l-7 -7l-9 9h2v7a2 2 0 0 0 2 2h7.5" />
    <Path d="M9 21v-6a2 2 0 0 1 2 -2h2c.661 0 1.248 .32 1.612 .815" />
    <Path d="M19 14l-2 4h4l-2 4" />
  </Svg>
);
export default SvgHomeBolt;
