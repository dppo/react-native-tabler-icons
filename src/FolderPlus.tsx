import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFolderPlus = (props: SvgProps) => (
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
    <Path d="M12 19h-7a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5" />
    <Path d="M16 19h6" />
    <Path d="M19 16v6" />
  </Svg>
);
export default SvgFolderPlus;
