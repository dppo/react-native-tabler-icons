import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMoodTongueWink2 = (props: SvgProps) => (
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
    <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <Path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
    <Path d="M15 10h-.01" />
    <Path d="M10 14v2a2 2 0 1 0 4 0v-2m1.5 0h-7" />
    <Path d="M7 10c.5 -1 2.5 -1 3 0" />
  </Svg>
);
export default SvgMoodTongueWink2;
