import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCross = (props: SvgProps) => (
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
    <Path d="M10 21h4v-9h5v-4h-5v-5h-4v5h-5v4h5z" />
  </Svg>
);
export default SvgCross;
