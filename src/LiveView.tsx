import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLiveView = (props: SvgProps) => (
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
    <Path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
    <Path d="M4 16v2a2 2 0 0 0 2 2h2" />
    <Path d="M16 4h2a2 2 0 0 1 2 2v2" />
    <Path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
    <Path d="M12 11l0 .01" />
    <Path d="M12 18l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
  </Svg>
);
export default SvgLiveView;
