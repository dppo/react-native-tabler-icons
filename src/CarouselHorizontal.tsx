import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCarouselHorizontal = (props: SvgProps) => (
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
    <Path d="M7 5m0 1a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1z" />
    <Path d="M22 17h-1a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h1" />
    <Path d="M2 17h1a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-1" />
  </Svg>
);
export default SvgCarouselHorizontal;
