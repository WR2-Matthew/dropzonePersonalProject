import React, { Component } from 'react';
import './Logbook.css'
import { connect } from 'react-redux';
import { getAllJumps, getUser } from '../../redux/actionCreators';
import AddJumpModal from '../AddJumpModal/AddJumpModal';
import Jumps from '../Jumps/Jumps';

class Logbook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dzSearched: '',
      loading: false
    };
  };

  componentDidMount = () => {
    this.props.getUser();
    this.setState({
      loading: true
    })
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log('hit')
    if (prevState.loading !== this.state.loading) {
      this.props.getAllJumps(this.props.user.id)
    }

  };

  handleChangeDz = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { dzSearched } = this.state;
    const { jumps, user } = this.props;

    console.log(jumps)
    console.log(user)

    return (
      <div className='logbookHolder' >
        {!user
          ? <h1> You must login to view your logbook!</h1 >

          : <div>
            <div className='logbookFunctionalityHolder'>

              <div className='logbookSearchHolder' >
                <input className='logbookSearch' placeholder='Dropzone Jumped At' name='dzSearched' value={dzSearched} onChange={(e) => this.handleChangeDz(e)} />
              </div>

              <div>
                <AddJumpModal userId={this.props.user.id} />
              </div>

            </div>
            <div>

              {jumps.map((jump, i) => {
                return (
                  <Jumps />

                )
              })}
            </div>
          </div>
        }




      </div >
    )
  };
};

const mapDispatchToProps = {
  getAllJumps,
  getUser
};

function mapStateToProps(state) {
  return {
    jumps: state.jumpReducer.jumps.data,
    user: state.userReducer.user.data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logbook);