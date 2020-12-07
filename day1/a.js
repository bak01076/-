class ObjectUtilities {
  /* Your magic here */
  mergeObjects(a, b) {
    return { name: a.name, favFood: a.favFood, password: b.password };
  }
  removePassword(obj) {
    const { name, favFood } = obj;
    const newObj = {
      name,
      favFood,
    };
    return newObj;
  }
  freezeObj(obj) {
    return Object.freeze(obj);
  }
  getOnlyValues(obj) {
    return Object.values(obj);
  }
  getOnlyProperties(obj) {
    return Object.keys(obj);
  }
}

const objA = {
  name: "Nicolas",
  favFood: "Kimchi",
};

const objB = {
  password: "12345",
};

const classObj = new ObjectUtilities();

const user = classObj.mergeObjects(objA, objB);
console.log(user);

const cleanUser = classObj.removePassword(user);
console.log(cleanUser);

const frozenUser = classObj.freezeObj(cleanUser);

const onlyValues = classObj.getOnlyValues(frozenUser);
console.log(onlyValues);

const onlyProperties = classObj.getOnlyProperties(frozenUser);
console.log(onlyProperties);
