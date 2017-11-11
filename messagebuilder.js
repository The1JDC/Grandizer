'use strict';

module.exports = () =>
{

const message=
  {
    "text": "Event ABC at Time XYZ function ",
    "attachments": [
        {
            "text": "Are you attending the event?",
            "fallback": "Well I am sorry you can't tell us if you are attending ",
            "callback_id": "grd_hh",
            "color": "#6EFG11",
            "attachment_type": "default",
            "actions": [
                {
                    "name": "attend",
                    "text": "Yes",
                    "type": "button",
                    "value": "Yes",
					"style": "warning"
                },
                {
                    "name": "attend",
                    "text": "Maybe?",
                    "type": "button",
                    "value": "Maybe"
                },
                {
                    "name": "attend",
                    "text": "No",
                    "style": "danger",
                    "type": "button",
                    "value": "No",
                    "confirm": {
                        "title": "Are you sure?",
                        "text": "You are going to miss a fun party",
                        "ok_text": "Yes",
                        "dismiss_text": "No"
                    }
                }
            ]
        }
    ]
}

return message;
}
