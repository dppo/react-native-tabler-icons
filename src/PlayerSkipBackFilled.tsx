import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPlayerSkipBackFilled = (props: SvgProps) => (
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
    <Path
      d="M19.496 4.136l-12 7a1 1 0 0 0 0 1.728l12 7a1 1 0 0 0 1.504 -.864v-14a1 1 0 0 0 -1.504 -.864z"
      strokeWidth={0}
      fill="currentColor"
    />
    <Path
      d="M4 4a1 1 0 0 1 .993 .883l.007 .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z"
      strokeWidth={0}
      fill="currentColor"
    />
  </Svg>
);
export default SvgPlayerSkipBackFilled;
