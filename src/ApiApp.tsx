import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgApiApp = (props: SvgProps) => (
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
    <Path d="M15 12v6.5a2.5 2.5 0 1 1 -5 0v-.5" />
    <Path d="M12 9h6.5a2.5 2.5 0 1 1 0 5h-.5" />
    <Path d="M9 12v-6.5a2.5 2.5 0 0 1 5 0v.5" />
  </Svg>
);
export default SvgApiApp;
