import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFold = (props: SvgProps) => (
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
    <Path d="M12 3v6l3 -3m-6 0l3 3" />
    <Path d="M12 21v-6l3 3m-6 0l3 -3" />
    <Path d="M4 12l1 0" />
    <Path d="M9 12l1 0" />
    <Path d="M14 12l1 0" />
    <Path d="M19 12l1 0" />
  </Svg>
);
export default SvgFold;
