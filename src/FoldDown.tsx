import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFoldDown = (props: SvgProps) => (
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
    <Path d="M12 11v8l3 -3m-6 0l3 3" />
    <Path d="M9 7l1 0" />
    <Path d="M14 7l1 0" />
    <Path d="M19 7l1 0" />
    <Path d="M4 7l1 0" />
  </Svg>
);
export default SvgFoldDown;
