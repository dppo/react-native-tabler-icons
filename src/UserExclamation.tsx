import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgUserExclamation = (props: SvgProps) => (
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
    <Path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
    <Path d="M6 21v-2a4 4 0 0 1 4 -4h4c.348 0 .686 .045 1.008 .128" />
    <Path d="M19 16v3" />
    <Path d="M19 22v.01" />
  </Svg>
);
export default SvgUserExclamation;
