import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgScissors = (props: SvgProps) => (
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
    <Path d="M6 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M6 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M8.6 8.6l10.4 10.4" />
    <Path d="M8.6 15.4l10.4 -10.4" />
  </Svg>
);
export default SvgScissors;
