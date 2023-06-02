import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLighter = (props: SvgProps) => (
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
    <Path d="M10 3v16a2 2 0 0 0 2 2h5a2 2 0 0 0 2 -2v-7h-12a2 2 0 0 1 -2 -2v-5a2 2 0 0 1 2 -2h3z" />
    <Path d="M16 4l1.465 1.638a2 2 0 1 1 -3.015 .099l1.55 -1.737z" />
  </Svg>
);
export default SvgLighter;
