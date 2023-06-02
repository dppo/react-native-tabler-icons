import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandCouchdb = (props: SvgProps) => (
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
    <Path d="M6 12h12v-2a2 2 0 0 1 2 -2a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2a2 2 0 0 1 2 2v2z" />
    <Path d="M6 15h12" />
    <Path d="M6 18h12" />
    <Path d="M21 11v7" />
    <Path d="M3 11v7" />
  </Svg>
);
export default SvgBrandCouchdb;
