import '@bin/config';
import { LoggerAdapter } from '@adapters/logger.adapter';
import { container } from 'tsyringe';

(function main() {
    const scream = container.resolve(LoggerAdapter);
    scream.info('hello world');
})();