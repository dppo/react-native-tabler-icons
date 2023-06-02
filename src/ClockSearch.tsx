import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgClockSearch = (props: SvgProps) => (
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
    <Path d="M20.993 11.646a9 9 0 1 0 -9.318 9.348" />
    <Path d="M12 7v5l1 1" />
    <Path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M20.2 20.2l1.8 1.8" />
  </Svg>
);
export default SvgClockSearch;
