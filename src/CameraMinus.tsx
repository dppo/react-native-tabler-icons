import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCameraMinus = (props: SvgProps) => (
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
    <Path d="M12 20h-7a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v6" />
    <Path d="M16 19h6" />
    <Path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
  </Svg>
);
export default SvgCameraMinus;
