LogoutPage = React.createClass({
	componentDidMount(){
		Meteor.logout((err)=>{
			if(err) {
				alert(JSON.stringify(err))
			} else {
				FlowRouter.go('/')
			}
		})
	},
	render(){
		return (
			<div>
				Logging out...
			</div>
		)
	}
})