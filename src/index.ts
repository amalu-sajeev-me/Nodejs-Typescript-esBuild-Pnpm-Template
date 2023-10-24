import '../bin/config';
import { container } from 'tsyringe';
import { LoggerAdapter } from 'adapters/logger.adapter';

(function main() {
    const scream = container.resolve(LoggerAdapter);
    // write your code here..
    scream.info('hello world');
})();