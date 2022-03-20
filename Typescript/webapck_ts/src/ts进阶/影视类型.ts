type Person='string'|'number'|'boolean';
type Obj={
  [p in Person]:string
}