import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgScale = (props: SvgProps) => (
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
    <Path d="M7 20l10 0" />
    <Path d="M6 6l6 -1l6 1" />
    <Path d="M12 3l0 17" />
    <Path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
    <Path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
  </Svg>
);
export default SvgScale;
