import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSticker = (props: SvgProps) => (
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
    <Path d="M20 12l-2 .5a6 6 0 0 1 -6.5 -6.5l.5 -2l8 8" />
    <Path d="M20 12a8 8 0 1 1 -8 -8" />
  </Svg>
);
export default SvgSticker;
