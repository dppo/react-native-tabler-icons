import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMessage2Bolt = (props: SvgProps) => (
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
    <Path d="M8 9h8" />
    <Path d="M8 13h6" />
    <Path d="M13 20l-1 1l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5" />
    <Path d="M19 16l-2 3h4l-2 3" />
  </Svg>
);
export default SvgMessage2Bolt;
