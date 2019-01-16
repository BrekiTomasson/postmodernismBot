import { Worker } from './worker';

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

(async () => {
  await console.log("Waiting to start ...")
  await delay(10000);
  await (new Worker).init();
  await console.log('All done working.')
})()
