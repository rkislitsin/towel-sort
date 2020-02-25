
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if ((!matrix) || (matrix == 0)) return []
  result = []

  for(let i = 0; i < matrix.length; i++) {
    result.push((i % 2) ? matrix[i].reverse() : matrix[i])
  }
  return result.join(',').split(',');
}
