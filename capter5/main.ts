import singleton from './ModuleSingleton';

singleton.state.push("aa");
console.log(singleton.state);

//readonly error
singleton.state = ["bbb"];

console.log(singleton.state);