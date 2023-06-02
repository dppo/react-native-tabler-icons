import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBadgesFilled = (props: SvgProps) => (
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
    <Path
      d="M16.486 12.143l-4.486 2.69l-4.486 -2.69a1 1 0 0 0 -1.514 .857v4a1 1 0 0 0 .486 .857l5 3a1 1 0 0 0 1.028 0l5 -3a1 1 0 0 0 .486 -.857v-4a1 1 0 0 0 -1.514 -.857z"
      strokeWidth={0}
      fill="currentColor"
    />
    <Path
      d="M16.486 3.143l-4.486 2.69l-4.486 -2.69a1 1 0 0 0 -1.514 .857v4a1 1 0 0 0 .486 .857l5 3a1 1 0 0 0 1.028 0l5 -3a1 1 0 0 0 .486 -.857v-4a1 1 0 0 0 -1.514 -.857z"
      strokeWidth={0}
      fill="currentColor"
    />
  </Svg>
);
export default SvgBadgesFilled;
