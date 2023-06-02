import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgWorldCog = (props: SvgProps) => (
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
    <Path d="M21 12a9 9 0 1 0 -8.979 9" />
    <Path d="M3.6 9h16.8" />
    <Path d="M3.6 15h8.9" />
    <Path d="M11.5 3a17 17 0 0 0 0 18" />
    <Path d="M12.5 3a16.992 16.992 0 0 1 2.522 10.376" />
    <Path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M19.001 15.5v1.5" />
    <Path d="M19.001 21v1.5" />
    <Path d="M22.032 17.25l-1.299 .75" />
    <Path d="M17.27 20l-1.3 .75" />
    <Path d="M15.97 17.25l1.3 .75" />
    <Path d="M20.733 20l1.3 .75" />
  </Svg>
);
export default SvgWorldCog;
