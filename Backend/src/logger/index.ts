import pino from 'pino';
import dayjs from 'dayjs';
// import config from 'config';
import { config } from "../config/default";

const isDevEnv = config.get('envMode') === 'development';

const logger = pino({
    ...isDevEnv && {
        transport: {
            target: 'pino-pretty',
            options: {
                colorize: true
            }
        }
    },
    base: {
        pid: false,
    },
    timestamp: () => `,"time":"${dayjs().format()}"`
});

export default logger;