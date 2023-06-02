import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandLinktree = (props: SvgProps) => (
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
    <Path d="M9 3l-7 12h3v5h5v-5h-2l4 -7z" />
    <Path d="M15 3l7 12h-3v5h-5v-5h2l-4 -7z" />
  </Svg>
);
export default SvgBrandLinktree;
