import _extends from "@babel/runtime/helpers/esm/extends";
import { camelize } from './format/string';
export function installable(options) {
  return _extends({}, options, {
    install(app) {
      var {
        name
      } = options;
      app.component(name, options);
      app.component(camelize("-" + name), options);
    }

  });
}