import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCarOff = (props: SvgProps) => (
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
    <Path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M15.584 15.588a2 2 0 0 0 2.828 2.83" />
    <Path d="M5 17h-2v-6l2 -5h1m4 0h4l4 5h1a2 2 0 0 1 2 2v4m-6 0h-6m-6 -6h8m4 0h3m-6 -3v-2" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgCarOff;
