import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFlask = (props: SvgProps) => (
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
    <Path d="M9 3l6 0" />
    <Path d="M10 9l4 0" />
    <Path d="M10 3v6l-4 11a.7 .7 0 0 0 .5 1h11a.7 .7 0 0 0 .5 -1l-4 -11v-6" />
  </Svg>
);
export default SvgFlask;
