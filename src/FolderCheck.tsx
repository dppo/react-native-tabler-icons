import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFolderCheck = (props: SvgProps) => (
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
    <Path d="M11 19h-6a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v4" />
    <Path d="M15 19l2 2l4 -4" />
  </Svg>
);
export default SvgFolderCheck;
