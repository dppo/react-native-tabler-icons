import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgGenderFemme = (props: SvgProps) => (
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
    <Path d="M12 9m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
    <Path d="M12 14v7" />
    <Path d="M7 18h10" />
  </Svg>
);
export default SvgGenderFemme;
