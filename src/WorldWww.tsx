import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgWorldWww = (props: SvgProps) => (
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
    <Path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
    <Path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
    <Path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
    <Path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
    <Path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
    <Path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
    <Path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" />
    <Path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" />
    <Path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" />
  </Svg>
);
export default SvgWorldWww;
