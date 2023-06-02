import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSquareRoundedArrowUp = (props: SvgProps) => (
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
    <Path d="M16 12l-4 -4l-4 4" />
    <Path d="M12 16v-8" />
    <Path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
  </Svg>
);
export default SvgSquareRoundedArrowUp;
