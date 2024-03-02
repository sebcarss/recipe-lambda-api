'use strict';

import { lambdaHandler } from '../../app.mjs';
import { expect } from 'chai';
var event, context;

describe('Recipe not found', function () {
    it('Returns 404 error code', async () => {
        const result = await lambdaHandler(event, context)

        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(404);
    });
});

describe('Recipe found', function () {
    it('Verifies successful result', async () => {
        const result = await lambdaHandler(event, context)

        expect (result.statusCode).to.equal(200);
    });
});