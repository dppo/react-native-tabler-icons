import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFolderPause = (props: SvgProps) => (
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
    <Path d="M13 19h-8a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v4" />
    <Path d="M17 17v5" />
    <Path d="M21 17v5" />
  </Svg>
);
export default SvgFolderPause;
