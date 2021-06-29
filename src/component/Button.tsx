import React from 'react';
type ButttonProps = {
  text?: string;
};
export function Button(props: ButttonProps) {
  return <button>{props.text || 'Default'}</button>;
}
