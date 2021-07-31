class App extends React.Component {
    constructor(){
      super()
      this.state = {
        isInviteOn: false
      }
    }

    onInviteClick = () => {
        const {
          fetchInvitePopupContent,
          discussionGroupId
        } = this.props;
        fetchInvitePopupContent(discussionGroupId);
        this.setState({ isInviteOn: true });
      };

    // openModal() {
    //   this.setState( prevState => (
    //   {show: !prevState.show}))
    // }
    offInviteClick(e) {
      if(e.target.id === "modal") {
        this.setState({isInviteOn: false})
      }
    }
    render() {
      return (
        <div>
        <button id='button' onClick={() => this.onInviteClick()}>Invite</button>

          {this.state.isInviteOn && <div id='modal' onClick={(e) => this.offInviteClick(e)}>
          
          <p>Modal open and Closed</p>
        </div>}
        </div>
      )
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('root'))