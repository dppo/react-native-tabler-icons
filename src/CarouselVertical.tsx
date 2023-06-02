import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCarouselVertical = (props: SvgProps) => (
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
    <Path d="M19 8v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1z" />
    <Path d="M7 22v-1a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v1" />
    <Path d="M17 2v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1" />
  </Svg>
);
export default SvgCarouselVertical;
