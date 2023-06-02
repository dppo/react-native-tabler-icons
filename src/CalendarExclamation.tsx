import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCalendarExclamation = (props: SvgProps) => (
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
    <Path d="M15 21h-9a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5" />
    <Path d="M16 3v4" />
    <Path d="M8 3v4" />
    <Path d="M4 11h16" />
    <Path d="M11 15h1" />
    <Path d="M12 15v3" />
    <Path d="M19 16v3" />
    <Path d="M19 22v.01" />
  </Svg>
);
export default SvgCalendarExclamation;
