import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPolygon = (props: SvgProps) => (
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
    <Path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M19 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M5 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M15 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M6.5 9.5l3.5 -3" />
    <Path d="M14 5.5l3 1.5" />
    <Path d="M18.5 10l-2.5 7" />
    <Path d="M13.5 17.5l-7 -5" />
  </Svg>
);
export default SvgPolygon;
