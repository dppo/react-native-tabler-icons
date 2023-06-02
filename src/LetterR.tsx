import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLetterR = (props: SvgProps) => (
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
    <Path d="M7 20v-16h5.5a4 4 0 0 1 0 9h-5.5" />
    <Path d="M12 13l5 7" />
  </Svg>
);
export default SvgLetterR;
