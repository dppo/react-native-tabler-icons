import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgReportSearch = (props: SvgProps) => (
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
    <Path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697" />
    <Path d="M18 12v-5a2 2 0 0 0 -2 -2h-2" />
    <Path d="M8 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
    <Path d="M8 11h4" />
    <Path d="M8 15h3" />
    <Path d="M16.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
    <Path d="M18.5 19.5l2.5 2.5" />
  </Svg>
);
export default SvgReportSearch;
