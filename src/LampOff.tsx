import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLampOff = (props: SvgProps) => (
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
    <Path d="M9 20h6" />
    <Path d="M12 20v-8" />
    <Path d="M7.325 7.35l-2.325 4.65h7m4 0h3l-4 -8h-6l-.338 .676" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgLampOff;
