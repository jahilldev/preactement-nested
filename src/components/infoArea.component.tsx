import { h, Fragment } from 'preact';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
  children: any;
}

/* -----------------------------------
 *
 * Button
 *
 * -------------------------------- */

function InfoArea({ children }: IProps) {
  return (
    <Fragment>
      <p>Message:</p>
      <slot name="message">Example message</slot>
      {children}
    </Fragment>
  );
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { InfoArea };
