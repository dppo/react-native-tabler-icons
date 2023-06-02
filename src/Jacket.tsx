import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgJacket = (props: SvgProps) => (
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
    <Path d="M16 3l-4 5l-4 -5" />
    <Path d="M12 19a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-8.172a2 2 0 0 1 .586 -1.414l.828 -.828a2 2 0 0 0 .586 -1.414v-2.172a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2.172a2 2 0 0 0 .586 1.414l.828 .828a2 2 0 0 1 .586 1.414v8.172a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2z" />
    <Path d="M20 13h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3" />
    <Path d="M4 17h3a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-3" />
    <Path d="M12 19v-11" />
  </Svg>
);
export default SvgJacket;
