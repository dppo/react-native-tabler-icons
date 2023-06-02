import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHomeLink = (props: SvgProps) => (
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
    <Path d="M20.085 11.085l-8.085 -8.085l-9 9h2v7a2 2 0 0 0 2 2h4.5" />
    <Path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 1.807 1.143" />
    <Path d="M21 21m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M21 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M16 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M21 16l-5 3l5 2" />
  </Svg>
);
export default SvgHomeLink;
