import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTournament = (props: SvgProps) => (
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
    <Path d="M4 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M20 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M4 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M4 20m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M6 12h3a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-3" />
    <Path d="M6 4h7a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-2" />
    <Path d="M14 10h4" />
  </Svg>
);
export default SvgTournament;
