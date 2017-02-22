/** @flow */
import mongoose from 'mongoose';

export default (conf: string) => {
  // We pass ur Promise to mongodb cause they have
  // a depracated message
  mongoose.Promise = global.Promise;
  // The conf come from the index.js file
  mongoose.connect(conf);
  // Connected mongoose to mongodb
  mongoose.connection
    .once('open', () => console.log(`Connected to MongoDb`)) // eslint-disable-line
    .on('error', err => console.warn('Warning', err)); // eslint-disable-line
};
