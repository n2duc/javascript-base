Array.prototype.spliceMethod = function(start, deleteCount, ...items) {
    const removedElements = [];
    const itemsToAdd = items.length;
    const length = this.length;

    let actualStart = start < 0 ? Math.max(length + start, 0) : Math.min(start, length);
    let actualDeleteCount = Math.min(Math.max(deleteCount, 0), length - actualStart);

    for (let i = actualStart; i < actualStart + actualDeleteCount; i++) {
        removedElements.push(this[i]);
    }
    if (itemsToAdd < actualDeleteCount) {
        for (let i = actualStart + actualDeleteCount; i < length; i++) {
            this[i - actualDeleteCount + itemsToAdd] = this[i];
        }
        this.length -= actualDeleteCount - itemsToAdd;
    } else if (itemsToAdd > actualDeleteCount) {
        for (let i = length - 1; i >= actualStart + actualDeleteCount; i--) {
            this[i + itemsToAdd - actualDeleteCount] = this[i];
        }
        this.length += itemsToAdd - actualDeleteCount;
    }

    for (let i = 0; i < itemsToAdd; i++) {
        this[actualStart + i] = items[i];
    }

    return removedElements;
}
const Countrys = ["Curaçao", "Uganda", "San Marino", "Lebanon", "Vietnam"];
const deletedCountry = Countrys.spliceMethod(2, 2, "Cuba", "VietCong");
console.log(Countrys)
console.log(deletedCountry)