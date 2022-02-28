var Validation;
(function(Validation2) {
  const lettersRegexp = /^[A-Za-z]+$/;
  const numberRegexp = /^[0-9]+$/;
  class LettersOnlyValidator {
    isAcceptable(s) {
      return lettersRegexp.test(s);
    }
  }
  Validation2.LettersOnlyValidator = LettersOnlyValidator;
  class ZipCodeValidator {
    isAcceptable(s) {
      return s.length === 5 && numberRegexp.test(s);
    }
  }
  Validation2.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
let strings = ["Hello", "98052", "101"];
let validators = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
for (let s of strings) {
  for (let name in validators) {
    console.log(`"${s}" - ${validators[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`);
  }
}
//# sourceMappingURL=index.js.map
