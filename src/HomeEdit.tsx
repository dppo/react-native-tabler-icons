import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHomeEdit = (props: SvgProps) => (
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
    <Path d="M9 21v-6a2 2 0 0 1 2 -2h2c.645 0 1.218 .305 1.584 .78" />
    <Path d="M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h4" />
    <Path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z" />
  </Svg>
);
export default SvgHomeEdit;
