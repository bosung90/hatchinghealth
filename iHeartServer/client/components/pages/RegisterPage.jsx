RegisterPage = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData() {
		return {
			user: Meteor.user(),
		}
	},
	onRegisterSubmit(e){
		e.preventDefault()
		let email = e.target[0].value
		let password  = e.target[1].value
		Accounts.createUser({email, password }, (err)=>{
			if(err) {
				alert(JSON.stringify(err))
			} else {
				alert ('register successful')
			}
		})
	},
	render() {
		return (
			<div id="loginModal" className="modal show" tabindex="-1" role="dialog" aria-hidden="true">
			  <div className="modal-dialog">
			  <div className="modal-content">
			      <div className="modal-header">
			          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
			          <h1 className="text-center">Register</h1>
			      </div>
			      <div className="modal-body">
			          <form className="form col-md-12 center-block" onSubmit={this.onRegisterSubmit}>
			            <div className="form-group">
			              <input type="text" className="form-control input-lg" placeholder="Email" />
			            </div>
			            <div className="form-group">
			              <input type="password" className="form-control input-lg" placeholder="Password" />
			            </div>
			            <div className="form-group">
			              <button className="btn btn-primary btn-lg btn-block">Register</button>
			              <span className="pull-right"><a href="/">Log In</a></span><span><a href="#">Need help?</a></span>
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