import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgChevronsUp = (props: SvgProps) => (
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
    <Path d="M7 11l5 -5l5 5" />
    <Path d="M7 17l5 -5l5 5" />
  </Svg>
);
export default SvgChevronsUp;
