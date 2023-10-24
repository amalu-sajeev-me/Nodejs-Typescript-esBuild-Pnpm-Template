import '../bin/config';
import { LoggerAdapter } from '../adapters/logger.adapter';
// import '@bin/config';
import { container } from 'tsyringe';

(function main() {
    const scream = container.resolve(LoggerAdapter);
    // write your code here..
    scream.info('hello world');
})();