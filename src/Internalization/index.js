import I18n from 'i18n-js';

export const translator = (screen) => (key) => I18n.t(`${screen}.${key}`);
