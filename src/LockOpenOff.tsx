import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLockOpenOff = (props: SvgProps) => (
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
    <Path d="M15 11h2a2 2 0 0 1 2 2v2m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h4" />
    <Path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M8 11v-3m.347 -3.631a4 4 0 0 1 7.653 1.631" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgLockOpenOff;
