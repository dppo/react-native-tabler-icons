import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandAirtable = (props: SvgProps) => (
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
    <Path d="M3 10v8l7 -3v-2.6z" />
    <Path d="M3 6l9 3l9 -3l-9 -3z" />
    <Path d="M14 12.3v8.7l7 -3v-8z" />
  </Svg>
);
export default SvgBrandAirtable;
