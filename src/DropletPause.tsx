import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDropletPause = (props: SvgProps) => (
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
    <Path d="M18.952 13.456a6.573 6.573 0 0 0 -.888 -2.579l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546a7.176 7.176 0 0 0 5.517 1.507" />
    <Path d="M17 17v5" />
    <Path d="M21 17v5" />
  </Svg>
);
export default SvgDropletPause;
