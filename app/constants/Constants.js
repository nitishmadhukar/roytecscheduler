Ext.define('App.constants.Constants', {
	singleton: true,
    schedulerDefaultEventColor: 'lightgray',
	/* Convert given date to YYYY-MM-DD HH:MM:SS */
	convertDateToSpecifiDate: function(inputDate)
	{
		// var inputDateUTC = new Date( inputDate.getTime() + (inputDate.getTimezoneOffset() * 60000));
		return Ext.Date.format(inputDate,'Y-m-d H:i:s');
	}
});