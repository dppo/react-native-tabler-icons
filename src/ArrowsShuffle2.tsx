import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowsShuffle2 = (props: SvgProps) => (
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
    <Path d="M18 4l3 3l-3 3" />
    <Path d="M18 20l3 -3l-3 -3" />
    <Path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" />
    <Path d="M3 17h3a5 5 0 0 0 5 -5a5 5 0 0 1 5 -5h5" />
  </Svg>
);
export default SvgArrowsShuffle2;
