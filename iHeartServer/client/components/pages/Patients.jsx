Patients = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData() {

		return {
			patients : Patients.find().fetch(),
			patientRecords : PatientRecords.find({}, {$eq: {flag: 'flagged'}}).fetch(),
		}
	},
    getInitialState(){
        return {
            flagged:0
        }
    },

	getPatientName(patientId){

	    for( i=0; i < this.data.patients.length; i++) {
	    	if (this.data.patients[i]._id = patientId) { 
	    	    return this.data.patients[i].name; 
	    	}
	    }

	    return null; 
	},
	getPatientPhoneNumber(patientId){

	    for( i=0; i < this.data.patients.length; i++) {
	    	if (this.data.patients[i]._id == patientId) { 
	    	    return this.data.patients[i].phoneNumber;  
	    	}
	    }

	    return null;
	},

	_renderPatientRecords() {
		if(this.data.patientRecords && this.data.patientRecords.length > 0) {
            this.setState({flagged:this.data.patientRecords.length })
			return this.data.patientRecords.map((patientRecord)=>{
				return (
					<tr key={patientRecord._id}>
	                    <td>{patientRecord._id}</td>
	                    <td>{patientRecord.measuredDate.toString()}</td>
	                    <td>{this.getPatientName(patientRecord.patientId)}</td>
	                    <td>{this.getPatientPhoneNumber(patientRecord.patientId)}</td>
	                </tr>
				)
			})
		}
	},
	render() {
		return (
			 <div id="wrapper">

        {/*Navigation*/}
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/">iHeart</a>
            </div>
            {/*Top Menu Items*/}
            <ul className="nav navbar-right top-nav">
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-envelope"></i> <b className="caret"></b></a>
                    <ul className="dropdown-menu message-dropdown">
                        <li className="message-preview">
                            <a href="#">
                                <div className="media">
                                    <span className="pull-left">
                                        <img className="media-object" src="http://placehold.it/50x50" alt=""/>
                                    </span>
                                    <div className="media-body">
                                        <h5 className="media-heading"><strong>John Smith</strong>
                                        </h5>
                                        <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="message-preview">
                            <a href="#">
                                <div className="media">
                                    <span className="pull-left">
                                        <img className="media-object" src="http://placehold.it/50x50" alt=""/>
                                    </span>
                                    <div className="media-body">
                                        <h5 className="media-heading"><strong>John Smith</strong>
                                        </h5>
                                        <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="message-preview">
                            <a href="#">
                                <div className="media">
                                    <span className="pull-left">
                                        <img className="media-object" src="http://placehold.it/50x50" alt=""/>
                                    </span>
                                    <div className="media-body">
                                        <h5 className="media-heading"><strong>John Smith</strong>
                                        </h5>
                                        <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="message-footer">
                            <a href="#">Read All New Messages</a>
                        </li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-bell"></i> <b className="caret"></b></a>
                    <ul className="dropdown-menu alert-dropdown">
                        <li>
                            <a href="#">Alert Name <span className="label label-default">Alert Badge</span></a>
                        </li>
                        <li>
                            <a href="#">Alert Name <span className="label label-primary">Alert Badge</span></a>
                        </li>
                        <li>
                            <a href="#">Alert Name <span className="label label-success">Alert Badge</span></a>
                        </li>
                        <li>
                            <a href="#">Alert Name <span className="label label-info">Alert Badge</span></a>
                        </li>
                        <li>
                            <a href="#">Alert Name <span className="label label-warning">Alert Badge</span></a>
                        </li>
                        <li>
                            <a href="#">Alert Name <span className="label label-danger">Alert Badge</span></a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">View All</a>
                        </li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i> John Smith <b className="caret"></b></a>
                    <ul className="dropdown-menu">
                        <li>
                            <a href="#"><i className="fa fa-fw fa-user"></i> Profile</a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-fw fa-envelope"></i> Inbox</a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-fw fa-gear"></i> Settings</a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="/logout"><i className="fa fa-fw fa-power-off"></i> Log Out</a>
                        </li>
                    </ul>
                </li>
            </ul>
            {/*Sidebar Menu Items - These collapse to the responsive navigation menu on small screens*/}
            <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav side-nav">
                    <li className="active">
                        <a href="/"><i className="fa fa-fw fa-dashboard"></i> Alerts </a>
                    </li>
                    <li>
                        <a href="/patients.html"><i className="fa fa-fw fa-bar-chart-o"></i> Patients</a>
                    </li>
                </ul>
            </div>
            {/*/.navbar-collapse*/}
        </nav>

        <div id="page-wrapper">

            <div className="container-fluid">

                {/*Page Heading*/}
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">
                            Recent Alerts
                        </h1>
                    </div>
                </div>
                {/* /.row*/}

                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="panel panel-red">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-3">
                                        <i className="fa fa-comments fa-5x"></i>
                                    </div>
                                    <div className="col-xs-9 text-right">
                                        <div className="huge">{this.state.flagged}</div>
                                        <div>New Alerts</div>
                                    </div>
                                </div>
                            </div>
                            <a href="#">
                                <div className="panel-footer">
                                    <span className="pull-left">View Details</span>
                                    <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                    <div className="clearfix"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="panel panel-yellow">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-3">
                                        <i className="fa fa-support fa-5x"></i>
                                    </div>
                                    <div className="col-xs-9 text-right">
                                        <div className="huge">13</div>
                                        <div>Absent Users</div>
                                    </div>
                                </div>
                            </div>
                            <a href="#">
                                <div className="panel-footer">
                                    <span className="pull-left">View Details</span>
                                    <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                    <div className="clearfix"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="panel panel-green">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-3">
                                        <i className="fa fa-support fa-5x"></i>
                                    </div>
                                    <div className="col-xs-9 text-right">
                                        <div className="huge">50</div>
                                        <div>Total Users</div>
                                    </div>
                                </div>
                            </div>
                            <a href="#">
                                <div className="panel-footer">
                                    <span className="pull-left">View Details</span>
                                    <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                    <div className="clearfix"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                {/* /.row */}

                {/* /.row */}

                <div className="row">
                    
                
                    <div className="col-lg-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title"><i className="fa fa-money fa-fw"></i> Alerts Panel</h3>
                            </div>
                            <div className="panel-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-hover table-striped">
                                        <thead>
                                            <tr>
                                                <th>Alert ID</th>
                                                <th>Alert Date</th>
                                                <th>Name</th>
                                                <th>Phone Number</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        	{this._renderPatientRecords()}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="text-right">
                                    <a href="#">View All Transactions <i className="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.row */}

            </div>
            {/* /.container-fluid */}

        </div>
        {/* /#page-wrapper */}

    </div>
		)
	}
})