// TODO
var App = () => (
  <div>Some cliche salutation</div>
);



// var GroceryListItem = (props) => {
//   var onListItemClick = (event) => {
//     console.log('working');
//   }

//   return (
//   <li onClick={onListItemClick}>{props.item}</li>
//   );
// }

// var GroceryList = (props) =>  (
//   <ul>
//       {props.items.map((item, index) => 
//         <GroceryListItem item={item} key={index} />
//       )}
//   </ul>
// );

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  onItemHover() {
    this.setState({
      hover: true
    });
  }

  onItemLeave() {
    this.setState( {
      hover: false
    });
  }

  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };
    return (
      <li style ={style} onMouseEnter={this.onItemHover.bind(this)} onMouseLeave={this.onItemLeave.bind(this)}>{this.props.item}</li>
    );
  }
}

var GroceryList = (props) =>  (
  <ul>
      {props.items.map((item, index) => 
        <GroceryListItem item={item} key={index} />
      )}
  </ul>
);

ReactDOM.render(<GroceryList items={["bananas", "milk", "coffee"]} />, document.getElementById("app"));
