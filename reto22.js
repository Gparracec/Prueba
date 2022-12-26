function checkStepNumbers(systemNames, stepNumbers) {
    return systemNames.every((e, index) => 
    stepNumbers[index] <= stepNumbers[
        index + systemNames.slice(index + 1).indexOf(e) + 1
    ])
}