import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgId = (props: SvgProps) => (
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
    <Path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
    <Path d="M9 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M15 8l2 0" />
    <Path d="M15 12l2 0" />
    <Path d="M7 16l10 0" />
  </Svg>
);
export default SvgId;
