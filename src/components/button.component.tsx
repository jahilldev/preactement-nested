import { h, Fragment } from 'preact';
import { define } from 'preactement';

/* -----------------------------------
 *
 * Button
 *
 * -------------------------------- */

function Component() {
  return <button onClick={onClick}>Click Me</button>;

  function onClick() {
    console.log('$_$');
  }
}

/* -----------------------------------
 *
 * Define
 *
 * -------------------------------- */

const Button = define('button', () => Component);

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Button };
