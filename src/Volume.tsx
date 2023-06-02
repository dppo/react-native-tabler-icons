import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgVolume = (props: SvgProps) => (
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
    <Path d="M15 8a5 5 0 0 1 0 8" />
    <Path d="M17.7 5a9 9 0 0 1 0 14" />
    <Path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
  </Svg>
);
export default SvgVolume;
