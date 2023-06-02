import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLetterX = (props: SvgProps) => (
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
    <Path d="M7 4l10 16" />
    <Path d="M17 4l-10 16" />
  </Svg>
);
export default SvgLetterX;
