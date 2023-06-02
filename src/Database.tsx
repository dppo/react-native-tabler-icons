import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDatabase = (props: SvgProps) => (
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
    <Path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
    <Path d="M4 6v6a8 3 0 0 0 16 0v-6" />
    <Path d="M4 12v6a8 3 0 0 0 16 0v-6" />
  </Svg>
);
export default SvgDatabase;
