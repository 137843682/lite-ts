import { notStrictEqual, strictEqual } from 'assert';

import { Command as Self } from './command';

describe('src/service/child-process/command.ts', () => {
    describe('.exec(name: string, ...args: any[])', () => {
        it('ok', async () => {
            const res = await new Self([
                ['node', '-v']
            ]).exec();
            strictEqual(res.code, 0);
            strictEqual(res.err, '');
            notStrictEqual(res.out, '');
        });

        it('ignore return', async () => {
            const res = await new Self([
                ['node', '-v']
            ]).setExtra({
                ignoreReturn: true
            }).exec();
            strictEqual(res.code, 0);
            strictEqual(res.err, '');
            strictEqual(res.out, '');
        });

        it('pipe', async () => {
            const res = await new Self([
                ['tasklist'],
                ['find', '']
            ]).exec();
            strictEqual(res.code, 1);
            strictEqual(res.err, '');
            strictEqual(res.out, '');
        });

        it('timeout', async () => {
            const res = await new Self([
                ['timeout', '5']
            ]).setTimeout(10).exec();
            strictEqual(res.code, 1);
            notStrictEqual(res.err, '');
            strictEqual(res.out, '');
        });
    });
});
