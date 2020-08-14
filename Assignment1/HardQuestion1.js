function realType(obj)
{
    if(obj==null)
    {
        return null;
    }
    else{
        switch(typeof(obj))
        {
            case "object":
                if(obj instanceof Array)
                {
                    return "object array"
                }
                if(obj instanceof Date)
                {
                    return "object date"
                }
                if(obj instanceof String)
                {
                    return "object string"
                }
                if(obj instanceof RegExp)
                {
                    return "object regexp"
                }
                if(obj instanceof Number)
                {
                    return "object number"
                }
            default:
                return typeof(obj);
        }
    }
}
console.log(realType(null));
console.log(typeof(NaN));