function isType(data, type) {
  var dataType = Object.prototype.toString
    .call(data)
    .slice(8, -1)
    .toLowerCase();
  return type === dataType;
}
export { isType };
