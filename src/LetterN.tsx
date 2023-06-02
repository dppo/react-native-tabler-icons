import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLetterN = (props: SvgProps) => (
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
    <Path d="M7 20v-16l10 16v-16" />
  </Svg>
);
export default SvgLetterN;
