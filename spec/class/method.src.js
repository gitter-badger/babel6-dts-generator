const s = Symbol('s');

export class Foo {
  foo() {

  }

  ['bar-baz']() {

  }

  'foo-bar'() {
    
  }

  [s]() {

  }
}
