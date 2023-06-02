import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPhotoX = (props: SvgProps) => (
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
    <Path d="M15 8h.01" />
    <Path d="M13 21h-7a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v7" />
    <Path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l3 3" />
    <Path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0" />
    <Path d="M22 22l-5 -5" />
    <Path d="M17 22l5 -5" />
  </Svg>
);
export default SvgPhotoX;
