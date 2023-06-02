import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowAutofitRight = (props: SvgProps) => (
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
    <Path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8" />
    <Path d="M4 18h17" />
    <Path d="M18 15l3 3l-3 3" />
  </Svg>
);
export default SvgArrowAutofitRight;
