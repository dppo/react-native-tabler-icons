import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCirclesRelation = (props: SvgProps) => (
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
    <Path d="M9.183 6.117a6 6 0 1 0 4.511 3.986" />
    <Path d="M14.813 17.883a6 6 0 1 0 -4.496 -3.954" />
  </Svg>
);
export default SvgCirclesRelation;
