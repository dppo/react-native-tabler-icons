import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBleachOff = (props: SvgProps) => (
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
    <Path d="M5 19h14m1.986 -1.977a2 2 0 0 0 -.146 -.773l-7.1 -12.25a2 2 0 0 0 -3.5 0l-.815 1.405m-1.488 2.568l-4.797 8.277a2 2 0 0 0 1.75 2.75" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgBleachOff;
