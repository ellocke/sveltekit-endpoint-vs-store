import {
  readable
} from 'svelte/store';

export const payload = readable(new Date());
