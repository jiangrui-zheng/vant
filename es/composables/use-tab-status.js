import { inject } from 'vue'; // eslint-disable-next-line

export var TAB_STATUS_KEY = Symbol();
export function useTabStatus() {
  return inject(TAB_STATUS_KEY, null);
}