import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgGif = (props: SvgProps) => (
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
    <Path d="M8 8h-3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3v-4h-1" />
    <Path d="M12 8v8" />
    <Path d="M16 16v-8h5" />
    <Path d="M20 12h-4" />
  </Svg>
);
export default SvgGif;
