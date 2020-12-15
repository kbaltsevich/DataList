const addres = process.argv[2]
const name = process.argv[3]
const phone = process.argv[4]
const startCall = process.argv[5]
const endCall = process.argv[6]
const dialstatus = process.argv[7]

const lengthChanger = (text) => {
    while(text.length < 16){
        text = `${text} `
    }
    return text
}

const writeLines = (dataText) => {
    let line = '-'

    line = `${line.repeat(dataText.length)}\r\n`
    return line;
}

const write = (addres, name, phone, startCall, endCall, dialstatus) => {
    const fs = require("fs");
    const dataText = `${lengthChanger(name)}\t | ${lengthChanger(phone)}\t | ${lengthChanger(startCall)}\t | ${lengthChanger(endCall)}\t | ${lengthChanger(dialstatus)}\t |\r\n`
    fs.appendFile(`${addres}.txt`, dataText, function(error){
        if(error) throw error; 
    });
    fs.appendFile(`${addres}.txt`, writeLines(dataText), function(error){
        if(error) throw error; 
    });

}

write(addres, name, phone, startCall, endCall, dialstatus)
