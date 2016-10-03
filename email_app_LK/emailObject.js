/**
 * Created by lkittogsuedu on 10/2/16.
 */

var appData = {
    name: 'Gmail',
    mailboxes: [
        {
            'name': 'inbox',
            'messages': [
                {
                    'subject': 'Reminder',
                    'sender': 's@b.com',
                    'recipient': 'lkitto@gmail.com',
                    'date': '10-01-2016',
                    'messageBody': 'Don\'t forget to ...'

                },
                {

                    'subject': 'Hello',
                    'sender': 'a@b.com',
                    'recipient': 'lkitto@gmail.com',
                    'date': '10-02-2016',
                    'messageBody': 'Bla bla bla'

                }

            ]
        },
        {
            'name': 'drafts',
            'messages': []
        },
        {
            'name': 'starred',
            'messages': [
                {
                    'subject': 'Some Stuff',
                    'sender': 'b@b.com',
                    'recipient': 'lkitto@gmail.com',
                    'date': '10-02-2016',
                    'messageBody': 'Bla bla bla'

                },
                {

                    'subject': 'Some other stuff',
                    'sender': 'c@b.com',
                    'recipient': 'lkitto@gmail.com',
                    'date': '10-02-2016',
                    'messageBody': 'Bla bla bla'

                },
                {

                    'subject': 'Yest more stuff',
                    'sender': 'd@e.com',
                    'recipient': 'lkitto@gmail.com',
                    'date': '10-2-2016',
                    'message': 'more bla'

                }
            ]
        },
        {
            'name': 'sent',
            'messages': [
                {

                    'subject': 'old mail',
                    'sender': 'who@cares.com',
                    'recipient': 'lkitto@gmail.com',
                    'date': '09-29-2016',
                    'messageBody': ''

                }
            ]
        },
        {
            'name': 'junk',
            'messages': [
                {

                    'subject': 'Unwanted mail',
                    'sender': 'junk@trash.com',
                    'recipient': 'lkitto@gmail.com',
                    'date': '10-02-2016',
                    'messageBody': 'Bla bla bla'

                }

            ]
        }
    ],
    contacts: [
        {name: 'Betty', 'emailAddress': 'Betty@Sue.com', lastMessage: "I wont be in class today"},
        {name: 'Sally', 'emailAddress': 'Sally@Sue.com', lastMessage: "You're such a nerd"}
    ]

//...
}

var mailboxNames = [];
var emailList = [];
var secondMessageBody = '';
var draftEMail = '';

var getMailboxNames = function () {
    appData.mailboxes.forEach(function (mailBox) {
        mailboxNames.push(mailBox.name);
    });
    console.log('Mailbox names: ', mailboxNames.toString());
    return mailboxNames;
};

var getEmailList = function () {
    appData.mailboxes.forEach(function (mailBox) {
        Array.prototype.push.apply(emailList, mailBox.messages);
    });
    console.log('Email list: ', JSON.stringify(emailList));
    return emailList;

};

getEmailText = function () {
    console.log('Second email Text: ', appData.mailboxes[0].messages[1].messageBody);
};

saveAsDraft = function (message) {
    var drafts = appData.mailboxes[1].messages;
    drafts.push(message);
    console.log('Drafts: ', JSON.stringify(drafts));
};

markSent = function (message) {
    var drafts = appData.mailboxes[1].messages;
    var sent = appData.mailboxes[3].messages;
    if (drafts.length > 0) {
        drafts.forEach(function (dEmail) {
            if (dEmail == message) {
                console.log("Drafts: ", JSON.stringify(drafts));
                drafts.splice(drafts.indexOf(dEmail), 1);
                console.log("Drafts: ", JSON.stringify(drafts));
            }
        })
    }
    message.status = 'sent';
    sent.push(message);
    console.log("Message: ", JSON.stringify(message));
    console.log("Sent: ", JSON.stringify(sent));
}

getMailboxNames(); //Get a list of inbox names
getEmailList(); //Get a list of emails
getEmailText() //Get the text of the second email in the visible list

var newDraft = {

    'subject': 'New draft mail',
    'sender': 'lkitto@gmail.com',
    'recipient': 'someone@gmail.com',
    'date': '10-03-2016',
    'messageBody': 'This is a new draft email.'

}
saveAsDraft(newDraft);//Add a draft email to the drafts mailbox
markSent(appData.mailboxes[1].messages[0]);//Mark an email as sent