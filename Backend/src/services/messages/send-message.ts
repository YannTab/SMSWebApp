import { Message } from "../../models/Message";
import fetch from 'node-fetch';

export const postMessage = async(url :string , data :any) => {
    await fetch(url, {
      method: 'POST', 
      headers: {
        'Authorization': 'Basic'
      },
      body: data 
    });
  }

export const sendMessage = async(message : any)=>{
    const sentMessage = {
        "phoneNumber": message.destinator,
        "message": message.msg,
    }
    postMessage('https://asap-desk.com/api/v0/Whatsapp/message', sentMessage)
        .then(async() => {
            await Message.create(message).then((message:any)=> console.log(message.msg +' : has been sent'))
        });
}


