import { Injectable } from '@nestjs/common'
import { v4 as uuidv4 } from 'uuid'
import { ColorsService } from '../colors/colors.service'

let users = [
    { uuid: uuidv4(), firstName: 'Maciej', lastName: 'Kowalski', yearOfBirth: 1997, favouriteColors: ['blue'] },
    { uuid: uuidv4(), firstName: 'Arek', lastName: 'Polak', yearOfBirth: 1994, favouriteColors: ['red'] },
    { uuid: uuidv4(), firstName: 'Janusz', lastName: 'Nowak', yearOfBirth: 1977, favouriteColors: ['white'] },
    { uuid: uuidv4(), firstName: 'Alibaba', lastName: 'Al-Halal', yearOfBirth: 1981, favouriteColors: ['black'] },
    { uuid: uuidv4(), firstName: 'Kuba', lastName: 'Zguba', yearOfBirth: 2010, favouriteColors: ['pink'] }
]

@Injectable()
export class UserService {
    constructor(
        private readonly colorService: ColorsService
    ) {}

    getAll() {
        return users
    }

    getUserById(id: string) {
        return users.find(user => user.uuid === id)
    }

    createNewUser(firstName: string, lastName: string, yearOfBirth: number, favouriteColors: Array<string>) {
        const uuid = uuidv4()
        const newUser = { uuid, firstName, lastName, yearOfBirth, favouriteColors }

        users = users.concat(newUser)
        this.colorService.addNewColor(favouriteColors)

        return newUser
    }

    updateUser(id: string, firstName: string, lastName: string, yearOfBirth: number, favouriteColors: Array<string>) {
        const updatedUser = users.find(user => user.uuid === id)

        updatedUser.firstName = firstName
        updatedUser.lastName = lastName
        updatedUser.yearOfBirth = yearOfBirth
        updatedUser.favouriteColors = favouriteColors

        return updatedUser
    }

    deleteUser(id: string) {
        users = users.filter(user => user.uuid !== id)
    }
}
