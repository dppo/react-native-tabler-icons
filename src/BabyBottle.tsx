import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBabyBottle = (props: SvgProps) => (
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
    <Path d="M5 10h14" />
    <Path d="M12 2v2" />
    <Path d="M12 4a5 5 0 0 1 5 5v11a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-11a5 5 0 0 1 5 -5z" />
  </Svg>
);
export default SvgBabyBottle;
