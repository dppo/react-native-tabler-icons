import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandBilibili = (props: SvgProps) => (
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
    <Path d="M3 10a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-6z" />
    <Path d="M8 3l2 3" />
    <Path d="M16 3l-2 3" />
    <Path d="M9 13v-2" />
    <Path d="M15 11v2" />
  </Svg>
);
export default SvgBrandBilibili;
