import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgGenderNeutrois = (props: SvgProps) => (
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
    <Path d="M12 10a5 5 0 1 1 0 10a5 5 0 0 1 0 -10z" />
    <Path d="M12 10v-7" />
  </Svg>
);
export default SvgGenderNeutrois;
