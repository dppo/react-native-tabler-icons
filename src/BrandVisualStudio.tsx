import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandVisualStudio = (props: SvgProps) => (
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
    <Path d="M4 8l2 -1l10 13l4 -2v-12l-4 -2l-10 13l-2 -1z" />
  </Svg>
);
export default SvgBrandVisualStudio;
