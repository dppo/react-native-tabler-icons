import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLamp = (props: SvgProps) => (
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
    <Path d="M5 12h14l-4 -8h-6z" />
  </Svg>
);
export default SvgLamp;
