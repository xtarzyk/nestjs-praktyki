import { Injectable } from "@nestjs/common";

let messages = ['ho ho ho', 'hi', 'hi hi hi', 'heloł']

@Injectable()
export class SecondService {
    getSecondHello() {
        return messages
    }

    postMessages() {
        const newMessage = 'newHello'

        return messages = messages.concat(newMessage)
    }

    updateFirstMessage() {
        const updateMessage = 'updated!'

        return messages = messages.map((message, index) => {
            if (index === 0) {
                message = updateMessage
            }

            return message
        })
    }

    deleteAll() {
        return messages = []
    } 
}
