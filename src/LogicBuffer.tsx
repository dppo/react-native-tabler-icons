import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLogicBuffer = (props: SvgProps) => (
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
    <Path d="M22 12h-5" />
    <Path d="M2 9h5" />
    <Path d="M2 15h5" />
    <Path d="M7 5l10 7l-10 7z" />
  </Svg>
);
export default SvgLogicBuffer;
