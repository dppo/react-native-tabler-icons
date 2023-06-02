import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFirstAidKit = (props: SvgProps) => (
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
    <Path d="M8 8v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
    <Path d="M4 8m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
    <Path d="M10 14h4" />
    <Path d="M12 12v4" />
  </Svg>
);
export default SvgFirstAidKit;
