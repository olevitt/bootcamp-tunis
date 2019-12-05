import * as I from '../input';
import { keepPositive, average } from './es6';


it('should keep positive numbers', () => {
	const array = ['2', '11111', '-789', '0']
	expect(keepPositive(array)).toEqual([2, 11111])
});

it('should return average', () => {
	const array = ['2', '11111', '-789']
	expect(average(array)).toEqual(5)
});
