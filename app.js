const condition1 = false,
    condition2 = false,
    access = condition1 ? condition2 ? 'true true': 'true false' : condition2 ? 'false true' : 'false false';
    console.log(access);
