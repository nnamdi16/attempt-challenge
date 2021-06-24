/* eslint-disable no-param-reassign */
const _ = require('wTesting');
const Attempts = require('./attempt');

//

function routine1(test) {
  test.case = 'First Test case';
  const got = Attempts.attempts([240, 360, 720], [360, 720], [1080]);
  const expected = [360];
  test.identical(got, expected);

  test.case = 'Second Test case';
  const got1 = Attempts.attempts([240, 720], [360, 720], [1080]);
  const expected1 = [720];
  test.identical(got1, expected1);

  test.case = 'Third Test case';
  const got2 = Attempts.attempts([240], [360, 720], [1080]);
  const expected2 = [];
  test.identical(got2, expected2);

  test.case = 'Fourth Test case';
  const got3 = Attempts.attempts([240, 360, 720], [240, 360, 720, 1080], [240, 360]);
  const expected3 = [240, 360];
  test.identical(got3, expected3);

  test.case = 'Fifth Test case';
  const got4 = Attempts.attempts([240, 720], [240, 360, 720, 1080], [240, 360]);
  const expected4 = [240, 720];
  test.identical(got4, expected4);

  test.case = 'Sixth Test case';
  const got5 = Attempts.attempts([240, 720], [240, 360, 1080], [240]);
  const expected5 = [240];
  test.identical(got5, expected5);

  test.case = 'Seventh Test case';
  const got6 = Attempts.attempts([720], [240, 360, 1080], [240, 360]);
  const expected6 = [];
  test.identical(got6, expected6);

  test.case = 'Eighth Test case';
  const got7 = Attempts.attempts([240, 360], [240, 360], [720, 1080]);
  const expected7 = [360];
  test.identical(got7, expected7);

  test.case = 'Ninth Test case';
  const got8 = Attempts.attempts([240, 360, 720], [360, 'any'], [360, 720]);
  const expected8 = [360, 720];
  test.identical(got8, expected8);

  test.case = 'Tenth Test case';
  const got9 = Attempts.attempts([240, 360, 720], [240, 360, 720], ['any', 720]);
  const expected9 = [240, 360, 720];
  test.identical(got9, expected9);

  test.case = 'Eleventh Test case';
  const got10 = Attempts.attempts([240, 360, 720], [360, 1080], ['any', 720]);
  const expected10 = [360];
  test.identical(got10, expected10);

  test.case = 'Twelveth Test case';
  const got11 = Attempts.attempts([240, 360, 720], [1080], ['any', 720]);
  const expected11 = [];
  test.identical(got11, expected11);
}

let Self = {
  name: 'Attempt',
  tests: {
    routine1,

  },
};

//

Self = wTestSuite(Self);
if (typeof module !== 'undefined' && !module.parent) wTester.test(Self.name);
