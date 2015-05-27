var inject = function() 
{
	return {
		request: function(config)
		{
			if( window.localStorage.getItem("token") != null)
			{
				config.headers['x-username'] 	= window.localStorage.getItem("username");
				config.headers['x-token'] 		= window.localStorage.getItem("token");
			}
			return config;
		}
	}
}
module.exports = inject;