function logStep(step) {
  console.log(step);
}

function walker() {
  return [1, 2, 3, 4, 5];
}

forEachStep(this, logStep, walker, this);
