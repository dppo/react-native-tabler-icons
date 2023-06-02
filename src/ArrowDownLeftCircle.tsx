import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowDownLeftCircle = (props: SvgProps) => (
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
    <Path d="M15.536 8.464l-9.536 9.536" />
    <Path d="M6 14v4h4" />
    <Path d="M15.586 8.414a2 2 0 1 0 2.828 -2.828a2 2 0 0 0 -2.828 2.828" />
  </Svg>
);
export default SvgArrowDownLeftCircle;
