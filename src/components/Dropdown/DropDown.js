import React, { Component } from 'react';
import './Dropdown.css';
import { connect } from 'react-redux';

class DropDown extends Component {
  constructor() {
    super()

    this.state = {
      zones: []
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps !== this.props) {
      this.getByState(this.props.dropzones, 'state_located')
    }
  }

  getByState = (arr, comp) => {
    if (!arr) {
      return
    } else {
      const unique = arr

        .map(dz => dz[comp])

        .map((state, i, array) => {
          // console.log(state)
          return array.indexOf(state) === i && i
        })

        .filter(e => arr[e])

        .map(e => arr[e])
      // console.log(unique)
      return this.setState({ zones: unique })
    }
  }

  render() {
    const { selectedDz, handleChangeDropzoneFn, defaultSelected } = this.props;

    function compare(a, b) {
      const dzA = a.state_located.toUpperCase();
      const dzB = b.state_located.toUpperCase();

      let comparison = 0;
      if (dzA > dzB) {
        comparison = 1;
      } else if (dzA < dzB) {
        comparison = -1
      }
      return comparison
    }

    const dzSorted = this.state.zones.sort(compare)

    return (
      <div className='dropdownHolder'>
        <form className='dropdownHolder'>
          <select
            name='dropzones'
            // value={selectedDz}
            defaultValue={{ label: "Select State", value: 0 }, selectedDz}
            onChange={(e) => handleChangeDropzoneFn(e)}>
            <option>
              {defaultSelected}
            </option>
            {dzSorted.map((dz, i) => (
              <option key={i} value={dz.state_located}>
                {dz.state_located}
              </option>
            ))}

          </select>
        </form>

      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    dropzones: state.dzReducer.dropzones.data
  }
};

export default connect(mapStateToProps)(DropDown);






// import React, { useState } from 'react';

// //this object is props comint down from where the component is being rendered.
// function DropDown({ title, items = [] }) {
//   //see if the dropdown menu is open or not.
//   let [open, setOpen] = useState(false);
//   //shows what item we have selected in the dropdown menu
//   let [selection, setSelection] = useState([]);

//   function handleOnClick(item) {
//     // .some checks to see if at least one item in array can pass a condition.
//     if (!selection.some(current => current.id === item.id)) {
//       setSelection([item])
//     }
//   }

//   return (
//     <div className='dropDownHolder'>
//       {/* tabIndex is for accessability... onKeyPress runs a function  */}
//       <div tabIndex={0}
//         className='ddHeader'
//         onKeyPress={() => toggle(!open)}
//         onClick={() => toggle(!open)}>
//         <div className='ddHeaderTitleHolder' >
//           <p className='ddHeaderTitle'>{title}</p>
//         </div>
//         <div>
//           <p>{open ? 'Close' : 'Open'}</p>
//         </div>
//       </div>
//       {open && (
//         <ul>
//           {items.map(item => {
//             <li key={item.id}>
//               <button type='button' onClick={() => handleOnClick(item)}>
//                 <span>{item.value}</span>
//                 <span>Selected...</span>
//               </button>
//             </li>
//           })}
//         </ul>
//       )}
//     </div >
//   )
// };

// export default DropDown;







// import React, { Component } from 'react';

// class DropDown extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 'coconut',
//       lists: ['a', 'b', 'c', 'd'],
//       selected: ''
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleChanger = (e) => {
//     this.setState({ selected: e.target.value })
//   }

//   handleSubmit(event) {
//     alert('Your favorite flavor is: ' + this.state.selected);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         {/* <label>
//           Pick your favorite flavor:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>
//         </label> */}

//         <br />
//         <br />
//         <label>
//           <select onChange={() => this.handleChange()}>
//             {this.state.lists.map((e, i) => (
//               <option key={i} value={e} >
//                 {e}
//               </option>
//             ))}
//           </select>
//         </label>
//         <input type="submit" value="Submit" />

//       </form>


//     );
//   }
// }


// export default DropDown;





// import React, { Component } from 'react';
// import Axios from 'axios';

// class DropDown extends Component {
//   constructor() {
//     super();

//     this.state = {
//       teams: [],
//       selectedTeam: '',
//       validationError: ""
//     }
//   };

//   componentDidMount = () => {
//     Axios.get('/api/dropzones')
//       .then(res => {
//         console.log(res.data, 'data')
//         let teamsFromApi = res.data.map(e => {
//           console.log(e)
//           return { value: e, display: e }
//         })
//         this.setState({
//           teams: [...this.state.teams, { value: '', display: '(Select Your Favorite Team)' }].concat(teamsFromApi)
//         });
//       }).catch(err => {
//         console.log(err)
//       });
//   };

//   render() {
//     console.log(this.state.teams)
//     return (
//       <div>
//         <div>
//           <select value={this.state.selectedTeam}
//             onChange={(e) => this.setState({ selectedTeam: e.target.value, validationError: e.target.value === '' ? 'You must make a selcetion' : '' })}   >
//             {this.state.teams.map((e, i) => <option key={i} value={e.value} >{e.display}</option>)}
//           </select>
//         </div>

//         <div style={{ color: 'red', marginTop: '5px' }}>
//           {/* {this.state.validationError} */}
//         </div>
//       </div>
//     )
//   }
// };

// export default DropDown;