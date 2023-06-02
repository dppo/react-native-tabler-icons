import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgAlertSquare = (props: SvgProps) => (
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
    <Path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
    <Path d="M12 8v4" />
    <Path d="M12 16h.01" />
  </Svg>
);
export default SvgAlertSquare;
