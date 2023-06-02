import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFireHydrant = (props: SvgProps) => (
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
    <Path d="M5 21h14" />
    <Path d="M17 21v-5h1a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-1v-4a5 5 0 0 0 -10 0v4h-1a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h1v5" />
    <Path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M6 8h12" />
  </Svg>
);
export default SvgFireHydrant;
