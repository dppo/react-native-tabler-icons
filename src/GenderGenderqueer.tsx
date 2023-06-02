import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgGenderGenderqueer = (props: SvgProps) => (
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
    <Path d="M12 11a5 5 0 1 1 0 10a5 5 0 0 1 0 -10z" />
    <Path d="M12 11v-8" />
    <Path d="M14.5 4.5l-5 3" />
    <Path d="M9.5 4.5l5 3" />
  </Svg>
);
export default SvgGenderGenderqueer;
