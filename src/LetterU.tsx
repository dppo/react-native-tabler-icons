import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLetterU = (props: SvgProps) => (
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
    <Path d="M6 4v11a5 5 0 0 0 5 5h2a5 5 0 0 0 5 -5v-11" />
  </Svg>
);
export default SvgLetterU;
