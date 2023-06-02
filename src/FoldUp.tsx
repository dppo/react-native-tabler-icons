import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFoldUp = (props: SvgProps) => (
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
    <Path d="M12 13v-8l-3 3m6 0l-3 -3" />
    <Path d="M9 17l1 0" />
    <Path d="M14 17l1 0" />
    <Path d="M19 17l1 0" />
    <Path d="M4 17l1 0" />
  </Svg>
);
export default SvgFoldUp;
