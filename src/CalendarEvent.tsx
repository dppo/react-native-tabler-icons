import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCalendarEvent = (props: SvgProps) => (
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
    <Path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
    <Path d="M16 3l0 4" />
    <Path d="M8 3l0 4" />
    <Path d="M4 11l16 0" />
    <Path d="M8 15h2v2h-2z" />
  </Svg>
);
export default SvgCalendarEvent;
