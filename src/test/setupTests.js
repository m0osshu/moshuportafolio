import matchers from '@testing-library/jasmine-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

beforeEach(() => {
  jasmine.getEnv().addMatchers({
    toBeTruthy: function() {
      return {
        compare: function(actual) {
          return {
            pass: !!actual,
            message: 'Expected value to be truthy'
          };
        }
      };
    }
  });
});