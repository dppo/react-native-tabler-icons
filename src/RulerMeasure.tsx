import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRulerMeasure = (props: SvgProps) => (
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
    <Path d="M19.875 12c.621 0 1.125 .512 1.125 1.143v5.714c0 .631 -.504 1.143 -1.125 1.143h-15.875a1 1 0 0 1 -1 -1v-5.857c0 -.631 .504 -1.143 1.125 -1.143h15.75z" />
    <Path d="M9 12v2" />
    <Path d="M6 12v3" />
    <Path d="M12 12v3" />
    <Path d="M18 12v3" />
    <Path d="M15 12v2" />
    <Path d="M3 3v4" />
    <Path d="M3 5h18" />
    <Path d="M21 3v4" />
  </Svg>
);
export default SvgRulerMeasure;
