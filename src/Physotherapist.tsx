import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPhysotherapist = (props: SvgProps) => (
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
    <Path d="M9 15l-1 -3l4 -2l4 1h3.5" />
    <Path d="M4 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M12 6m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M12 17v-7" />
    <Path d="M8 20h7l1 -4l4 -2" />
    <Path d="M18 20h3" />
  </Svg>
);
export default SvgPhysotherapist;
