import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgAlarmPlus = (props: SvgProps) => (
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
    <Path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    <Path d="M7 4l-2.75 2" />
    <Path d="M17 4l2.75 2" />
    <Path d="M10 13h4" />
    <Path d="M12 11v4" />
  </Svg>
);
export default SvgAlarmPlus;
