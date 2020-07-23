import React, { Component } from 'react';
import axios from 'axios';

class DropDown extends Component {
  constructor() {
    super()

    this.state = {
      dropzones: [],
      selectedDropzone: []
    }
  }

  componentDidMount = () => {
    axios
      .get('/api/dropzones')
      .then(res => {
        this.setState({ dropzones: res.data })
        // console.log(this.state.dropzones)
      })
  };

  handleChangeDropzone = (e) => {
    this.setState({ selectedDropzone: e.target.value })
  };

  // handleSubmitDropzone = (e) => {
  //   e.preventDefault();
  // };

  getByState = (arr, comp) => {
    const unique = arr

      .map(dz => dz[comp])

      .map((state, i, array) => {
        console.log(state)
        return array.indexOf(state) === i && i
      })

      .filter(e => arr[e])

      .map(e => arr[e])
    // console.log(unique)
    return unique
  }

  render() {
    const { dropzones, selectedDropzone } = this.state;

    const dropzoneByState = this.getByState(dropzones, 'state_located');

    // const filterDropDown = dropzones.filter(function (result) {
    //   return result.state_located === selectedDropzone;
    // });

    // const mappedDz = filterDropDown.map((e, i) => {
    //   return (
    //     <div key={i}>
    //       <p>{e.name}</p>
    //       <p>{e.state_located}</p>
    //     </div>
    //   )
    // })
    console.log(selectedDropzone)

    return (
      <div>
        <form>
          <select name='dropzones' value={selectedDropzone} onChange={this.handleChangeDropzone}>
            {dropzoneByState.map((dz, i) => (
              <option key={i} value={dz.state_located}>
                {dz.state_located}
              </option>
            ))}
          </select>
          {/* <input type='submit' value='Submit' /> */}
        </form>
        {/* {!mappedDz ? dropzones : mappedDz} */}

      </div>
    )
  }
}

export default DropDown;






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