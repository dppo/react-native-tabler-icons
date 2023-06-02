import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCursorText = (props: SvgProps) => (
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
    <Path d="M10 12h4" />
    <Path d="M9 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3" />
    <Path d="M15 4a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3" />
  </Svg>
);
export default SvgCursorText;
