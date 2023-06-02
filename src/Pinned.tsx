import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPinned = (props: SvgProps) => (
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
    <Path d="M9 4v6l-2 4v2h10v-2l-2 -4v-6" />
    <Path d="M12 16l0 5" />
    <Path d="M8 4l8 0" />
  </Svg>
);
export default SvgPinned;
