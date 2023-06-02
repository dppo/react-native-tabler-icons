import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPictureInPictureTop = (props: SvgProps) => (
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
    <Path d="M11 5h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-4" />
    <Path d="M15 10h5a1 1 0 0 0 1 -1v-3a1 1 0 0 0 -1 -1h-5a1 1 0 0 0 -1 1v3a1 1 0 0 0 1 1z" />
  </Svg>
);
export default SvgPictureInPictureTop;
