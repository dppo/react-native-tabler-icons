import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLicense = (props: SvgProps) => (
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
    <Path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
    <Path d="M9 7l4 0" />
    <Path d="M9 11l4 0" />
  </Svg>
);
export default SvgLicense;
