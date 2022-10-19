import { h, Fragment } from 'preact';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
  alertType: string;
  titleValue: string;
  messageValue: string;
  children: any;
}

/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { Button } from './button.component';

/* -----------------------------------
 *
 * Button
 *
 * -------------------------------- */

function InfoArea({ messageValue, titleValue, children }: IProps) {
  return (
    <Fragment>
      <h3 class="title">{titleValue}</h3>
      {children}
      <Button />
    </Fragment>
  );
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { InfoArea };
