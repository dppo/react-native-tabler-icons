import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowAutofitUp = (props: SvgProps) => (
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
    <Path d="M12 4h-6a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h8" />
    <Path d="M18 20v-17" />
    <Path d="M15 6l3 -3l3 3" />
  </Svg>
);
export default SvgArrowAutofitUp;
