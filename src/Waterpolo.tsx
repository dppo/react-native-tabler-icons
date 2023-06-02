import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgWaterpolo = (props: SvgProps) => (
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
    <Path d="M12 9a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <Path d="M5 8l3 4l4.5 1l7.5 -1" />
    <Path d="M3 18.75a2.4 2.4 0 0 0 1 .25a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 1 -.25" />
    <Path d="M12 16l.5 -3" />
    <Path d="M6.5 5a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z" fill="currentColor" />
  </Svg>
);
export default SvgWaterpolo;
