import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandEtsy = (props: SvgProps) => (
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
    <Path d="M14 12h-5" />
    <Path d="M3 3m0 5a5 5 0 0 1 5 -5h8a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-8a5 5 0 0 1 -5 -5z" />
    <Path d="M15 16h-5a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h5" />
  </Svg>
);
export default SvgBrandEtsy;
