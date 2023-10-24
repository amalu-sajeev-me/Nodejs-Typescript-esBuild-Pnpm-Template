import 'reflect-metadata';
import { container } from 'tsyringe';
import { LoggerAdapter } from '../adapters/logger.adapter.ts';

container.registerSingleton('LoggerAdapter', LoggerAdapter);