interface IObjectType {
    element: number;
    count: number;
}

const findDuplicates = (array: number[]): IObjectType[] => {
    const dup: number[] = [];
    const obj: IObjectType[] = [];

    for (const iterator of array) {
        if (dup.includes(iterator)) {
            const dataIn: number = obj.findIndex((e) => e.element == iterator);

            if (dataIn !== -1) {
                obj.splice(dataIn, 1, { element: iterator, count: obj[dataIn].count + 1 });
            } else {
                obj.push({
                    element: iterator,
                    count: 2
                });
            }
        }
        dup.push(iterator);
    }

    return obj;
};

console.log(findDuplicates([2, 2, 5, 2, 2, 3, 4, 5, 6, 6]));
