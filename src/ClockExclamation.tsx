import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgClockExclamation = (props: SvgProps) => (
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
    <Path d="M20.986 12.502a9 9 0 1 0 -5.973 7.98" />
    <Path d="M12 7v5l3 3" />
    <Path d="M19 16v3" />
    <Path d="M19 22v.01" />
  </Svg>
);
export default SvgClockExclamation;
