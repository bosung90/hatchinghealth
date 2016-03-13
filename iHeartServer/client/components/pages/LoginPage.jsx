LoginPage = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData() {
		return {
			user: Meteor.user(),
		}
	},
	onLoginSubmit(e){
		e.preventDefault()
		let email = e.target[0].value
		let pass = e.target[1].value
		Meteor.loginWithPassword(email, pass, (err)=>{
			if(err) {
				alert(JSON.stringify(err))
			} else {
				FlowRouter.go('/DoctorDashboard')
			}
		})
	},
	componentDidMount(){
		if(this.data.user) {
			FlowRouter.go('/DoctorDashboard')
		} else {
			console.log('!!!!!!you are not logged in')
		}
	},
	render() {
		return (
			<div id="loginModal" className="modal show" tabIndex="-1" role="dialog" aria-hidden="true">
			  <div className="modal-dialog">
			  <div className="modal-content">
			      <div className="modal-header">
			          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
			          <h1 className="text-center">Login</h1>
			      </div>
			      <div className="modal-body">
			          <form className="form col-md-12 center-block" onSubmit={this.onLoginSubmit}>
			            <div className="form-group">
			              <input type="text" className="form-control input-lg" placeholder="Email" defaultValue="annie@example.com" />
			            </div>
			            <div className="form-group">
			              <input type="password" className="form-control input-lg" placeholder="Password" defaultValue="123"/>
			            </div>
			            <div className="form-group">
			             <button className="btn btn-primary btn-lg btn-block">Sign In</button>
			              <span className="pull-right"><a href="/register">Register</a></span><span><a href="#">Need help?</a></span>
			            </div>
			          </form>
			      </div>
			      <div className="modal-footer">
			          <div className="col-md-12">
			          <button className="btn" data-dismiss="modal" aria-hidden="true">Cancel</button>
					  </div>	
			      </div>
			  </div>
			  </div>
			</div>
		)
	}
})