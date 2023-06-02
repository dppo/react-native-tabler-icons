import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgWaveSawTool = (props: SvgProps) => (
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
    <Path d="M3 12h5l4 8v-16l4 8h5" />
  </Svg>
);
export default SvgWaveSawTool;
