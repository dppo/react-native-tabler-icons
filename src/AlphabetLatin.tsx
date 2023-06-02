import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgAlphabetLatin = (props: SvgProps) => (
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
    <Path d="M6 10h2a2 2 0 0 1 2 2v5h-3a2 2 0 1 1 0 -4h3" />
    <Path d="M14 7v10" />
    <Path d="M14 10m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z" />
  </Svg>
);
export default SvgAlphabetLatin;
