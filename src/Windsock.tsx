import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgWindsock = (props: SvgProps) => (
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
    <Path d="M6 3v18" />
    <Path d="M6 11l12 -1v-4l-12 -1" />
    <Path d="M10 5.5v5" />
    <Path d="M14 6v4" />
    <Path d="M4 21h4" />
  </Svg>
);
export default SvgWindsock;
