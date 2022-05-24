import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid'

let users = [
    { uuid: uuidv4(), name: 'Maciej', age: 25 },
    { uuid: uuidv4(), name: 'Arek', age: 19 },
    { uuid: uuidv4(), name: 'Janusz', age: 50 },
    { uuid: uuidv4(), name: 'Alibaba', age: 40 },
    { uuid: uuidv4(), name: 'Kuba', age: 12 }
]

@Injectable()
export class UserService {
    getAll() {
        return users
    }

    getByName(name: string) {
        return users.find(user => user.name === name)
    }

    createNewUser(name: string, age: number) {
        const uuid = uuidv4()
        const newUser = { uuid, name, age }

        users = users.concat(newUser)

        return newUser
    }

    updateUser(id: string, name: string, age: number) {
        const updatedUser = users.find(user => user.uuid === id)

        updatedUser.name = name
        updatedUser.age = age

        return updatedUser
    }

    deleteUser(id: string) {
        users = users.filter(user => user.uuid !== id)
    }
}
