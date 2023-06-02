import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgServicemark = (props: SvgProps) => (
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
    <Path d="M9 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
    <Path d="M13 15v-6l3 4l3 -4v6" />
  </Svg>
);
export default SvgServicemark;
