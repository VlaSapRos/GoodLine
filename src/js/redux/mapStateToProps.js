function mapStateToProps(component) {
  switch(component) {
      case "PeopleSearch": {
          return function (state) {
              return {
                usersList: state.usersList
              };
          }
      }
      case "Store": {
          return function(state) {
              return {
                usersList: state.usersList
              };
          }
      }
      case "Content": {
        return function(state) {
            return {
              usersList: state.usersList
            };
        }
      }   
      case "Content1": {
        return function(state) {
            return {
              usersList: state.usersList
            };
        }
      }   
      default: return undefined;
  }
}

export default mapStateToProps;