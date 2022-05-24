import { Injectable } from '@nestjs/common';

let colors = [
    'blue',
    'red',
    'green',
    'yellow',
    'brown',
    'white',
    'black',
    'orange',
    'pink',
    'grey'
]

@Injectable()
export class ColorsService {
    getAll() {
        return colors
    }

    addNewColor(favouriteColors: Array<string>) {
        const result = favouriteColors.filter(color => !colors.includes(color))
        console.log(result)
        colors = colors.concat(result)
        console.log(colors)
    }
}
