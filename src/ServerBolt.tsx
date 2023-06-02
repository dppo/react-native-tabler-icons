import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgServerBolt = (props: SvgProps) => (
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
    <Path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
    <Path d="M15 20h-9a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3h12" />
    <Path d="M7 8v.01" />
    <Path d="M7 16v.01" />
    <Path d="M20 15l-2 3h3l-2 3" />
  </Svg>
);
export default SvgServerBolt;
