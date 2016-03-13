ChartsPage = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData() {
		return {
			user: Meteor.user(),
		}
	},
	render() {
		return (
		<div id="wrapper">
        {/* Navigation */}
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="index.html">SB Admin</a>
          </div>
          {/* Top Menu Items */}
          <ul className="nav navbar-right top-nav">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-envelope" /> <b className="caret" /></a>
              <ul className="dropdown-menu message-dropdown">
                <li className="message-preview">
                  <a href="#">
                    <div className="media">
                      <span className="pull-left">
                        <img className="media-object" src="http://placehold.it/50x50" alt />
                      </span>
                      <div className="media-body">
                        <h5 className="media-heading"><strong>John Smith</strong>
                        </h5>
                        <p className="small text-muted"><i className="fa fa-clock-o" /> Yesterday at 4:32 PM</p>
                        <p>Lorem ipsum dolor sit amet, consectetur...</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="message-preview">
                  <a href="#">
                    <div className="media">
                      <span className="pull-left">
                        <img className="media-object" src="http://placehold.it/50x50" alt />
                      </span>
                      <div className="media-body">
                        <h5 className="media-heading"><strong>John Smith</strong>
                        </h5>
                        <p className="small text-muted"><i className="fa fa-clock-o" /> Yesterday at 4:32 PM</p>
                        <p>Lorem ipsum dolor sit amet, consectetur...</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="message-preview">
                  <a href="#">
                    <div className="media">
                      <span className="pull-left">
                        <img className="media-object" src="http://placehold.it/50x50" alt />
                      </span>
                      <div className="media-body">
                        <h5 className="media-heading"><strong>John Smith</strong>
                        </h5>
                        <p className="small text-muted"><i className="fa fa-clock-o" /> Yesterday at 4:32 PM</p>
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
              <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-bell" /> <b className="caret" /></a>
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
                <li className="divider" />
                <li>
                  <a href="#">View All</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user" /> John Smith <b className="caret" /></a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#"><i className="fa fa-fw fa-user" /> Profile</a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-fw fa-envelope" /> Inbox</a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-fw fa-gear" /> Settings</a>
                </li>
                <li className="divider" />
                <li>
                  <a href="#"><i className="fa fa-fw fa-power-off" /> Log Out</a>
                </li>
              </ul>
            </li>
          </ul>
          {/* Sidebar Menu Items - These collapse to the responsive navigation menu on small screens */}
          <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav side-nav">
              <li>
                <a href="index.html"><i className="fa fa-fw fa-dashboard" /> Alerts</a>
              </li>
              <li className="active">
                <a href="charts.html"><i className="fa fa-fw fa-bar-chart-o" /> Patients</a>
              </li>
            </ul>
          </div>
          {/* /.navbar-collapse */}
        </nav>
        <div id="page-wrapper">
          <div className="container-fluid">
            {/* Page Heading */}
            <div className="row">
              <div className="col-lg-12">
                <h1 className="page-header">
                  Charts
                </h1>
                <ol className="breadcrumb">
                  <li>
                    <i className="fa fa-dashboard" />  <a href="index.html">Dashboard</a>
                  </li>
                  <li className="active">
                    <i className="fa fa-bar-chart-o" /> Charts
                  </li>
                </ol>
              </div>
            </div>
            {/* /.row */}
            {/* Flot Charts */}
            <div className="row">
              <div className="col-lg-12">
                <h2 className="page-header">Flot Charts</h2>
                <p className="lead">Flot is a pure JavaScript plotting library for jQuery, with a focus on simple usage, attractive looks and interactive features. For full usage instructions and documentation for Flot Charts, visit <a href="http://www.flotcharts.org/">http://www.flotcharts.org/</a>.</p>
              </div>
            </div>
            {/* /.row */}
            <div className="row">
              <div className="col-lg-12">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title"><i className="fa fa-bar-chart-o" /> Line Graph Example with Tooltips</h3>
                  </div>
                  <div className="panel-body">
                    <div className="flot-chart">
                      <div className="flot-chart-content" id="flot-line-chart" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.row */}
            <div className="row">
              <div className="col-lg-4">
                <div className="panel panel-green">
                  <div className="panel-heading">
                    <h3 className="panel-title"><i className="fa fa-long-arrow-right" /> Pie Chart Example with Tooltips</h3>
                  </div>
                  <div className="panel-body">
                    <div className="flot-chart">
                      <div className="flot-chart-content" id="flot-pie-chart" />
                    </div>
                    <div className="text-right">
                      <a href="#">View Details <i className="fa fa-arrow-circle-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="panel panel-yellow">
                  <div className="panel-heading">
                    <h3 className="panel-title"><i className="fa fa-long-arrow-right" /> Multiple Axes Line Graph Example with Tooltips and Raw Data</h3>
                  </div>
                  <div className="panel-body">
                    <div className="flot-chart">
                      <div className="flot-chart-content" id="flot-multiple-axes-chart" />
                    </div>
                    <div className="text-right">
                      <a href="#">View Details <i className="fa fa-arrow-circle-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.row */}
            <div className="row">
              <div className="col-lg-6">
                <div className="panel panel-red">
                  <div className="panel-heading">
                    <h3 className="panel-title"><i className="fa fa-long-arrow-right" /> Moving Line Chart</h3>
                  </div>
                  <div className="panel-body">
                    <div className="flot-chart">
                      <div className="flot-chart-content" id="flot-moving-line-chart" />
                    </div>
                    <div className="text-right">
                      <a href="#">View Details <i className="fa fa-arrow-circle-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title"><i className="fa fa-long-arrow-right" /> Bar Graph with Tooltips</h3>
                  </div>
                  <div className="panel-body">
                    <div className="flot-chart">
                      <div className="flot-chart-content" id="flot-bar-chart" />
                    </div>
                    <div className="text-right">
                      <a href="#">View Details <i className="fa fa-arrow-circle-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.row */}
            {/* Morris Charts */}
            <div className="row">
              <div className="col-lg-12">
                <h2 className="page-header">Morris Charts</h2>
                <p className="lead">Morris.js is a very simple API for drawing line, bar, area and donut charts. For full usage instructions and documentation for Morris.js charts, visit <a href="http://morrisjs.github.io/morris.js/">http://morrisjs.github.io/morris.js/</a>.</p>
              </div>
            </div>
            {/* /.row */}
            <div className="row">
              <div className="col-lg-12">
                <div className="panel panel-green">
                  <div className="panel-heading">
                    <h3 className="panel-title"><i className="fa fa-bar-chart-o" /> Area Line Graph Example with Tooltips</h3>
                  </div>
                  <div className="panel-body">
                    <div id="morris-area-chart" />
                  </div>
                </div>
              </div>
            </div>
            {/* /.row */}
            <div className="row">
              <div className="col-lg-4">
                <div className="panel panel-yellow">
                  <div className="panel-heading">
                    <h3 className="panel-title"><i className="fa fa-long-arrow-right" /> Donut Chart Example</h3>
                  </div>
                  <div className="panel-body">
                    <div id="morris-donut-chart" />
                    <div className="text-right">
                      <a href="#">View Details <i className="fa fa-arrow-circle-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="panel panel-red">
                  <div className="panel-heading">
                    <h3 className="panel-title"><i className="fa fa-long-arrow-right" /> Line Graph Example with Tooltips</h3>
                  </div>
                  <div className="panel-body">
                    <div id="morris-line-chart" />
                    <div className="text-right">
                      <a href="#">View Details <i className="fa fa-arrow-circle-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title"><i className="fa fa-long-arrow-right" /> Bar Graph Example</h3>
                  </div>
                  <div className="panel-body">
                    <div id="morris-bar-chart" />
                    <div className="text-right">
                      <a href="#">View Details <i className="fa fa-arrow-circle-right" /></a>
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