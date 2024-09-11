import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 500 },  // Ramp-up to 20 users
    { duration: '7m', target: 500 },   // Hold at 20 users for 1 minute
    { duration: '0s', target: 0 },   // Ramp-down to 0 users
  ],
};

export default function () {
  let res = http.get('https://v2.ea-dental.com/');

  // Verify that the status code is 200 (OK)
  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  // Simulate a short pause between requests
  sleep(1);
}
