FlowRouter.route('/', {
	action(params, queryParams) {
		ReactLayout.render(LoginPage)
	}
})

FlowRouter.route('/DoctorDashboard', {
	action(params, queryParams) {
		ReactLayout.render(DoctorDashboard)
	}
})

FlowRouter.route('/charts', {
	action(params, queryParams) {
		ReactLayout.render(ChartsPage)
	}
})