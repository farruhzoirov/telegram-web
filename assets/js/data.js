function randomId() {
    return Math.round(Math.random() * 10000000000);
}

const data  = [
    {
        contactId : 1,
        contactName : "Og'abek brat",
        isOnline: true,
        avatarUrl: 'img/oggivoy.jpg',
        chatMessages: {
            recieved: [
                {
                    messageId:randomId(),
                    messageTime: '00:04',
                    messageText: 'Ok'
                }
            ],

            sent: [
                {
                    messageId:randomId(),
                    messageTime: '00:03',
                    messageText: 'Ok'
                }
            ]
        },
        phoneNumber: '+998 99 963 97 73',
        userName: '@sultonbayevogabek',
        bio: "Og'abek Sultonbayev"

    },

    {
        contactId : 2,
        contactName : 'Sherzod kursdoshim',
        isOnline: true,
        avatarUrl: 'img/call-icon.svg',
        chatMessages: {
            recieved: [
                {
                    messageId:randomId(),
                    messageTime: '12:04',
                    messageText: 'Ok'
                }
            ],

            sent: [
                {
                    messageId:randomId(),
                    messageTime: '11:11',
                    messageText: 'Ok'
                }
            ]
        },
        phoneNumber: '+998 90 299 64 16',
        userName: '@wexad',
        bio: "Choriyev Sherzod"

    }

]