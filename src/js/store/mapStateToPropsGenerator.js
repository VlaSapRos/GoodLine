import CONTENT from './component.js'

export default function mapStateToPropsGenerator(component) {
  switch(component) {
      case "CONTENT": {
          return function (state) {
              return {
                usersList : state.value_1
              };
          }
      }
      case "Component_2": {
          return function(state) {
              return {
                  value_2: state.value_2
              };
          }
      }
      default: return undefined;
  }
}