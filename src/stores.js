import {
  readable
} from 'svelte/store';
import {
  formatDate
} from '$lib/utils/utils';

export const payload = readable(formatDate(new Date()));
