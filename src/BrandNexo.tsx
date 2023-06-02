import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandNexo = (props: SvgProps) => (
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
    <Path d="M17 3l5 3v12l-5 3l-10 -6v-6l10 6v-6l-5 -3z" />
    <Path d="M12 6l-5 -3l-5 3v12l5 3l4.7 -3.13" />
  </Svg>
);
export default SvgBrandNexo;
