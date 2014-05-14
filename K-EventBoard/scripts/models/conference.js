/*
*   This is the Conference model module
*/

define([], function () {

    //RETURN THE MODEL FOR CONFERENCE
    return kendo.data.Model.define({

        id: 'Id',
        fields : {
            Id: { type: 'string' },
            Title: { type: 'string' },
            StartDate: { type: 'date' },
            EndDate: { type: 'date' }
        }

    });

});