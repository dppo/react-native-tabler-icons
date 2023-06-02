import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDashboard = (props: SvgProps) => (
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
    <Path d="M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M13.45 11.55l2.05 -2.05" />
    <Path d="M6.4 20a9 9 0 1 1 11.2 0z" />
  </Svg>
);
export default SvgDashboard;
