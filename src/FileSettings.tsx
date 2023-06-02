import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFileSettings = (props: SvgProps) => (
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
    <Path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M12 10.5v1.5" />
    <Path d="M12 16v1.5" />
    <Path d="M15.031 12.25l-1.299 .75" />
    <Path d="M10.268 15l-1.3 .75" />
    <Path d="M15 15.803l-1.285 -.773" />
    <Path d="M10.285 12.97l-1.285 -.773" />
    <Path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <Path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
  </Svg>
);
export default SvgFileSettings;
