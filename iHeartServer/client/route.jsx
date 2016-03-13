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

FlowRouter.route('/patients', {
	action(params, queryParams) {
		ReactLayout.render(PatientsPage)
	}
})

FlowRouter.route('/register', {
	action(params, queryParams) {
		ReactLayout.render(RegisterPage)
	}
})

FlowRouter.route('/logout', {
	action(params, queryParams) {
		ReactLayout.render(LogoutPage)
	}
})