/*
 * Takes:
 *   - original photo data as Uint8ClampedArray
 *   - colors as matrix of hex value ints, [[r, g, b, a], [r, g, b, a]]
 * Returns
 *   - new photo data (with selection highlighted) as Uint8ClampedArray
 * */

const BLUE = [26, 255, 234]

function match (current, target, threshold = 20) {
  return Math.abs(current - target) <= threshold
}

export function findMatchingArea (data, colors) {
  for (var i = 0; i < data.length; i += 4) {
    for (var j = 0; j < colors.length; j++) {
      let target = colors[j]
      let r = match(data[i], target[0])
      let g = match(data[i + 1], target[1])
      let b = match(data[i + 2], target[2])
      if (r && g && b) {
        data[i] = BLUE[0]
        data[i + 1] = BLUE[1]
        data[i + 2] = BLUE[2]
      }
    }
  }
  return data
}

export function percentMatchingArea (data) {
  let match = 0
  for (var i = 0; i < data.length; i += 4) {
    if (BLUE.every((c, x) => c === data[i + x])) {
      match += 1
    }
  }
  let pixels = data.length / 4
  let percent = match / pixels * 100
  return percent
}
