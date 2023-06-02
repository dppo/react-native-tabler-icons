import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFolderBolt = (props: SvgProps) => (
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
    <Path d="M13 19h-8a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5" />
    <Path d="M19 16l-2 3h4l-2 3" />
  </Svg>
);
export default SvgFolderBolt;
