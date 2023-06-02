import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBread = (props: SvgProps) => (
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
    <Path d="M17 5a3 3 0 0 1 2 5.235v6.765a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6.764a3 3 0 0 1 1.824 -5.231l.176 0h10z" />
  </Svg>
);
export default SvgBread;
