import * as core from 'actions/core';

const nameToGreet = core.getInput('who-to-greet');
const outputVal = `Hello ${nameToGreet} from Terra!`;
core.setOutput('greeting', outputVal);