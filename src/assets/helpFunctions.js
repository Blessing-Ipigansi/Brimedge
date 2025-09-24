export const randInt = (lowerLim, upperLim) => {
  lowerLim = Math.ceil(lowerLim);   // Round up min
  upperLim = Math.floor(upperLim);  // Round down max
  return Math.floor(Math.random() * (upperLim - lowerLim + 1)) + lowerLim;
}

export const selectRandom = (fromList, howMany) => {
  if (fromList.length >= howMany) {
    let count = howMany
    let tempList = [...fromList]
    let finalList = []
    while (count > 0) {
      let i = randInt(0, tempList.length-1)
      finalList.push(tempList[i])
      tempList.splice(i, 1)
      count = count - 1
    }
    return finalList
  }
  else return fromList
}

export const sanitize = (fields, unsanitized) => {
  const final = {}
  fields.forEach((f) => {
    const field = unsanitized.items[(unsanitized.items.length-1)].fields
    switch (typeof field[f]) {
      case undefined:
        final[f] = undefined;
        break;
      case 'object':
        // object is a non-empty array
        if (Array.isArray(field[f])) {
          final[f] = field[f].map((item) => {
            // items are image urls
            if (item.fields && item.fields.file && item.fields.file.url) {
              return item.fields.file.url
            }
            // items are contentful JSON encapsulated in array or some other array
            else return item
          })
        }
        // object is an image url
        else if (field[f].fields && field[f].fields.file && field[f].fields.file.url) {
          final[f] = field[f].fields.file.url
        }
        // item is JSON object or some contentful object
        else final[f] = field[f]
        break;
      default:
        final[f] = field[f];
    }
  })
  return final
}
