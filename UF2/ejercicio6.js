const strings = ['this', 'is', 'a', 'collection', 'of', 'strings'];

const mayorString = strings.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
});
console.log(mayorString);

const containsIs = strings.filter(str => str.includes('is'));
console.log(containsIs);

const orderedStrings = strings.sort((a, b) => a.length - b.length);
console.log(orderedStrings);

const deletedLastItem = strings;
deletedLastItem.pop()
console.log(deletedLastItem);

const addNewItem = strings;
addNewItem.shift();
console.log(addNewItem);

const firstThree = strings.slice(0, 3);
console.log(firstThree);