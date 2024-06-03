const getEventParam = (
  eventParamName,
  eventParamType = "string",
  columnName = false
) => {
  let eventParamTypeName = "";
  switch (eventParamType) {
    case "string":
      eventParamTypeName = "string_value";
      break;
    case "int":
      eventParamTypeName = "int_value";
      break;
    case "double":
      eventParamTypeName = "double_value";
      break;
    case "float":
      eventParamTypeName = "float_value";
      break;
    default:
      throw "eventType is not valid";
  }
  return `(SELECT ep.value.${eventParamTypeName} AS ${eventParamName} 
  FROM UNNEST(event_params) ep WHERE ep.key = '${eventParamName}') AS ${
    columnName ? columnName : eventParamName
  }`;
};

module.exports = { getEventParam };

const coalesceEventParam = (param) => {
    return `
    (select coalesce(value.string_value,
            cast(value.int_value as string),
            cast(value.double_value as string),
            cast(value.float_value as string))
        from unnest(event_params) where key = '${param}')`
}

module.exports = { coalesceEventParam };