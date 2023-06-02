import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSearchOff = (props: SvgProps) => (
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
    <Path d="M5.039 5.062a7 7 0 0 0 9.91 9.89m1.584 -2.434a7 7 0 0 0 -9.038 -9.057" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgSearchOff;
