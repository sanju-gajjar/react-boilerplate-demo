/*
 * Sample Messages
 *
 * This contains all the text for the Sample container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Sample';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Sample container!',
  },
});
