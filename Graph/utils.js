const initVertColorTracking = (vertices) => {
  const colorMapping = {};
  vertices.forEach((vertex) => {
    colorMapping[vertex] = 'white';
  })
  return colorMapping;
}

module.exports = {
  initVertColorTracking
} 
