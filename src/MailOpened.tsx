import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMailOpened = (props: SvgProps) => (
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
    <Path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
    <Path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
    <Path d="M3 19l6 -6" />
    <Path d="M15 13l6 6" />
  </Svg>
);
export default SvgMailOpened;
