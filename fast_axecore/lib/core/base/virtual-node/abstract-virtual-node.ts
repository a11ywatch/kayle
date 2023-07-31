const whitespaceRegex = /[\t\r\n\f]/g;

class AbstractVirtualNode {
  parent = undefined;
  actualNode = undefined;

  constructor() {
    this.parent = undefined;
    this.actualNode = undefined;
  }

  get props() {
    throw new Error(
      'VirtualNode class must have a "props" object consisting ' +
        'of "nodeType" and "nodeName" properties'
    );
  }

  get attrNames(): string[] {
    throw new Error('VirtualNode class must have an "attrNames" property');
  }

  attr(_a: string): boolean {
    throw new Error('VirtualNode class must have an "attr" function');
  }

  hasAttr(_x: boolean): boolean {
    throw new Error('VirtualNode class must have a "hasAttr" function');
  }

  hasClass(className) {
    // get the value of the class attribute as svgs return a SVGAnimatedString
    // if you access the className property
    const classAttr = this.attr('class');

    if (!classAttr) {
      return false;
    }

    return (
      (' ' + classAttr + ' ').replace(whitespaceRegex, ' ').indexOf(' ' + className + ' ') >=
      0
    );
  }
}

export default AbstractVirtualNode;
