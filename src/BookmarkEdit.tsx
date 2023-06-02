import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBookmarkEdit = (props: SvgProps) => (
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
    <Path d="M11.35 17.39l-4.35 2.61v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v6" />
    <Path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z" />
  </Svg>
);
export default SvgBookmarkEdit;
