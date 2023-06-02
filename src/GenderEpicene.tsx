import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgGenderEpicene = (props: SvgProps) => (
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
    <Path d="M15.536 15.536a5 5 0 1 0 -7.072 -7.072a5 5 0 0 0 7.072 7.072z" />
    <Path d="M15.536 15.535l5.464 -5.535" />
    <Path d="M3 14l5.464 -5.535" />
    <Path d="M12 12h.01" />
  </Svg>
);
export default SvgGenderEpicene;
