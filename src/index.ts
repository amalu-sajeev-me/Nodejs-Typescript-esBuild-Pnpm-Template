import '../bin/config.ts';
import { container } from 'tsyringe';
import { LoggerAdapter } from '../adapters/logger.adapter.ts';

(function main() {
    const scream = container.resolve(LoggerAdapter);
    // write your code here..
    scream.info('hello world');
})();