function mapStateToProps(component) {
  switch(component) {
      case "NeedForRedux": {
          return function (state) {
              return {
                usersList: state.usersList
              };
          }
      }
      case "Component_2": {
          return function(state) {
              return {
                preloader: state.preloader
              };
          }
      }
      default: return undefined;
  }
}

export default mapStateToProps;