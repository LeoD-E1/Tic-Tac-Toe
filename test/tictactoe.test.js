import iteratePositions from '../src'
import testCases from './testCases.json'
import { expect } from 'chai'


describe('Test cases of tictactoe', () => {
    it('passes all tests', () => {
        testCases.forEach(testCase => {
            const result = iteratePositions(testCase.board)
            expect(result).to.equal(testCase.expectedResult)
        })
    });
})