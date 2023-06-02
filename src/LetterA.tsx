import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLetterA = (props: SvgProps) => (
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
    <Path d="M7 20v-12a4 4 0 0 1 4 -4h2a4 4 0 0 1 4 4v12" />
    <Path d="M7 13l10 0" />
  </Svg>
);
export default SvgLetterA;
