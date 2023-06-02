import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgApiAppOff = (props: SvgProps) => (
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
    <Path d="M12 15h-6.5a2.5 2.5 0 1 1 0 -5h.5" />
    <Path d="M15 15v3.5a2.5 2.5 0 1 1 -5 0v-.5" />
    <Path d="M13 9h5.5a2.5 2.5 0 1 1 0 5h-.5" />
    <Path d="M9 12v-3m.042 -3.957a2.5 2.5 0 0 1 4.958 .457v.5" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgApiAppOff;
