import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCameraSelfie = (props: SvgProps) => (
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
    <Path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
    <Path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
    <Path d="M15 11l.01 0" />
    <Path d="M9 11l.01 0" />
  </Svg>
);
export default SvgCameraSelfie;
