import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLetterJ = (props: SvgProps) => (
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
    <Path d="M17 4v12a4 4 0 0 1 -4 4h-2a4 4 0 0 1 -4 -4" />
  </Svg>
);
export default SvgLetterJ;
