import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgOctagon = (props: SvgProps) => (
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
    <Path d="M9.103 2h5.794a3 3 0 0 1 2.122 .879l4.101 4.101a3 3 0 0 1 .88 2.123v5.794a3 3 0 0 1 -.879 2.122l-4.101 4.101a3 3 0 0 1 -2.122 .879h-5.795a3 3 0 0 1 -2.122 -.879l-4.101 -4.1a3 3 0 0 1 -.88 -2.123v-5.794a3 3 0 0 1 .879 -2.122l4.101 -4.101a3 3 0 0 1 2.123 -.88z" />
  </Svg>
);
export default SvgOctagon;
