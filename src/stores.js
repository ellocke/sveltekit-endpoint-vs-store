import { readable } from 'svelte/store';
import { formatDate } from '$lib/utils/utils';

let date = formatDate(new Date());

export const payload = readable(date);
