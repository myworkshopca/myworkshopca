// Automatically loads and bootstraps files
// in the "./components/base" folder.

// Imports
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// this the load all files in the folder.
const requireComponent = require.context('@/components/base', true, /\.vue$/)

for (const file of requireComponent.keys()) {

    const componentConfig = requireComponent(file)
    const name = file
      .replace(/index.js/, '')
      .replace(/^\.\//, '')
      .replace(/\.\w+$/, '')
    const componentName = upperFirst(camelCase(name))

    // add ing prefix for each file name.
    Vue.component(`StoreBase${componentName}`,
                  componentConfig.default || componentConfig)
}
