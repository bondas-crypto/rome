/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {test} from 'rome';
import {testLint} from '../testHelpers';
import {dedent} from '@romejs/string-utils';

test(
  'no setter return',
  async (t) => {
    await testLint(
      t,
      dedent`
        class p {
          set name(value) {
            if (!value) {
              return 'wrong';
            }
          }
        }
      `,
      {category: 'lint/noSetterReturn'},
    );

    await testLint(
      t,
      dedent`
        class p {
          static set name(value) {
            if (!value) {
              return 'wrong';
            }
          }
        }
      `,
      {category: 'lint/noSetterReturn'},
    );

    await testLint(
      t,
      dedent`
        let p = {
          set name(value) {
            if (!value) {
              return 'wrong';
            }
          }
        };
      `,
      {category: 'lint/noSetterReturn'},
    );

    await testLint(
      t,
      dedent`
        class p {
          set name(value) {
            if (!value) {
              return;
            }
          }
        }
      `,
      {category: 'lint/noSetterReturn'},
    );
  },
);
