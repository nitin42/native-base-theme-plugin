'use strict';

module.exports = (babel) => {

  const { types: t } = babel;
  
  return {
    name: "native-base-theme-plugin", // not required
    visitor: {
      Identifier (path, {file}) {
        if (path.node.type === "Identifier" && path.node.name === "getTheme") {
          file.set("hasAttribute", true);
        }
      },

      Program: {
        enter (path, {file}) {
          file.set("hasAttribute", false);
        },
        
        exit (path, {file}) {
          if (!(file.get("hasAttribute"))) { return; }

          const declaration = t.importDeclaration(
            [t.importDefaultSpecifier(t.identifier("getTheme"))],
            t.stringLiteral('./native-base-theme/components/index')
          );

          path.node.body.unshift(declaration);
        }
      }
    }
  };
}
