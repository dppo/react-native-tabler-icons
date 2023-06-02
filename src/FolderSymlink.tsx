import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFolderSymlink = (props: SvgProps) => (
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
    <Path d="M3 21v-4a3 3 0 0 1 3 -3h5" />
    <Path d="M8 17l3 -3l-3 -3" />
    <Path d="M3 11v-5a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8" />
  </Svg>
);
export default SvgFolderSymlink;
