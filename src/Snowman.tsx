import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSnowman = (props: SvgProps) => (
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
    <Path d="M12 3a4 4 0 0 1 2.906 6.75a6 6 0 1 1 -5.81 0a4 4 0 0 1 2.904 -6.75z" />
    <Path d="M17.5 11.5l2.5 -1.5" />
    <Path d="M6.5 11.5l-2.5 -1.5" />
    <Path d="M12 13h.01" />
    <Path d="M12 16h.01" />
  </Svg>
);
export default SvgSnowman;
