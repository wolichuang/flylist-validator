import toDate from './lib/toDate';

import isEmail from './lib/isEmail';
import isURL from './lib/isURL';

import isMobilePhone from './lib/isMobilePhone';

import isMimeType from './lib/isMimeType';
const validator = {
  toDate,
  isEmail,
  isURL,
  isMobilePhone,
  isMimeType,
  escape,
  unescape,
  toString
};

export default validator;
