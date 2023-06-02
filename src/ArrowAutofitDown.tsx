import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowAutofitDown = (props: SvgProps) => (
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
    <Path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8" />
    <Path d="M18 4v17" />
    <Path d="M15 18l3 3l3 -3" />
  </Svg>
);
export default SvgArrowAutofitDown;
