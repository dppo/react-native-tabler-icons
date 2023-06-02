import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgChessRook = (props: SvgProps) => (
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
    <Path d="M8 16l-1.447 .724a1 1 0 0 0 -.553 .894v2.382h12v-2.382a1 1 0 0 0 -.553 -.894l-1.447 -.724h-8z" />
    <Path d="M8 16l1 -9h6l1 9" />
    <Path d="M6 4l.5 3h11l.5 -3" />
    <Path d="M10 4v3" />
    <Path d="M14 4v3" />
  </Svg>
);
export default SvgChessRook;
