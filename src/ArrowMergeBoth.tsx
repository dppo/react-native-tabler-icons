import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowMergeBoth = (props: SvgProps) => (
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
    <Path d="M16 8l-4 -4l-4 4" />
    <Path d="M12 20v-16" />
    <Path d="M18 18c-4 -1.333 -6 -4.667 -6 -10" />
    <Path d="M6 18c4 -1.333 6 -4.667 6 -10" />
  </Svg>
);
export default SvgArrowMergeBoth;
