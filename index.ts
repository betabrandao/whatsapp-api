  // TODO: CREATE A REST API: The REST API send aqnd response a code
  // TODO: Authenticate person with a JWT
  // TODO: SEND A MESSAGE TO A PERSON IN WHATSAPP
  // TODO: SEND A MESSAGE IN A GROUP 

// import { create, Whatsapp } from 'sulla-hotfix';
const sulla = require('sulla-hotfix');

let options = {
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless:true,
  throwErrorOnTosBlock:true,
  killTimer:40,
  autoRefresh:true, //default to true
  qrRefreshS:15, //please note that if this is too long then your qr code scan may end up being invalid. Generally qr codes expire every 15 seconds.
  cacheEnabled:false,
  //example chrome args. THIS MAY BREAK YOUR APP !!!ONLY FOR TESTING FOR NOW!!!.
  chromiumArgs:[
    '--aggressive-cache-discard',
    '--disable-cache',
    '--disable-application-cache',
    '--disable-offline-load-stale-cache',
    '--disk-cache-size=0'
  ]
}

sulla.create('session', options)
    .then(client => start(client))
    .catch(e=>{                                                                                                                                                                                                                                                                                                                                                                                                                       
      console.log(e);                                                                                                                                                                                                                                                                                                                                                                                                               
      process.exit();
    });

async function start(client) {
  client.onMessage(message => {
    if (message.body === 'Ola') {  
      client.sendText(message.from, '👋 Hello from sulla!');
    }  
  });


  // to send a message to a group, find at json group.contact.id._serialized
  // const groups = await client.getAllGroups()
  client.sendText('5511959336804-1581782128@g.us', 'Um teste, caetano')
  
}
