import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgNotebook = (props: SvgProps) => (
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
    <Path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
    <Path d="M13 8l2 0" />
    <Path d="M13 12l2 0" />
  </Svg>
);
export default SvgNotebook;
