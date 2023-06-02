import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSquareToggleHorizontal = (props: SvgProps) => (
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
    <Path d="M22 12h-20" />
    <Path d="M4 14v-8a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" />
    <Path d="M18 20a2 2 0 0 0 2 -2" />
    <Path d="M4 18a2 2 0 0 0 2 2" />
    <Path d="M14 20l-4 0" />
  </Svg>
);
export default SvgSquareToggleHorizontal;
