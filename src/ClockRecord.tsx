import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgClockRecord = (props: SvgProps) => (
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
    <Path d="M21 12.3a9 9 0 1 0 -8.683 8.694" />
    <Path d="M12 7v5l2 2" />
    <Path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  </Svg>
);
export default SvgClockRecord;
