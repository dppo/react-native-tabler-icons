import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDualScreen = (props: SvgProps) => (
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
    <Path d="M5 4l8 3v15l-8 -3z" />
    <Path d="M13 19h6v-15h-14" />
  </Svg>
);
export default SvgDualScreen;
