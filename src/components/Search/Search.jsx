import React from 'react';

import './Search.css';

var Search = (props) => {
  console.log('props', props)
      var children = props.children
      // var title = props.title
  var { title} = props;
  return (
    <form>
      <input
        type="text"
        className="Search-input"
      />
      <button
        type="submit"
        className="Search-button">
        {title}
      </button>
    </form>
  );
};


// class Search extends React.Component {
//   render() {
//     var children = this.props.children
//     return (
//       <form>
//         <input
//           type="text"
//           className="Search-input"
//           />
//         <button
//           type="submit"
//           className="Search-button">
//           {children}

//       </button>
//       </form>
//     );
//   }
// }
export default Search;