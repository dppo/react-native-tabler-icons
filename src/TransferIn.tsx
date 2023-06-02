import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTransferIn = (props: SvgProps) => (
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
    <Path d="M4 18v3h16v-14l-8 -4l-8 4v3" />
    <Path d="M4 14h9" />
    <Path d="M10 11l3 3l-3 3" />
  </Svg>
);
export default SvgTransferIn;
