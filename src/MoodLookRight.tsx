import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMoodLookRight = (props: SvgProps) => (
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
    <Path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
    <Path d="M15 9h-.01" />
    <Path d="M20 15h-4" />
  </Svg>
);
export default SvgMoodLookRight;
