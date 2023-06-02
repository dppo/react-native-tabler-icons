import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPencil = (props: SvgProps) => (
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
    <Path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
    <Path d="M13.5 6.5l4 4" />
  </Svg>
);
export default SvgPencil;
