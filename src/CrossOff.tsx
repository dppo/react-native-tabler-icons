import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCrossOff = (props: SvgProps) => (
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
    <Path d="M16 12h3v-4h-5v-5h-4v3m-2 2h-3v4h5v9h4v-7" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgCrossOff;
