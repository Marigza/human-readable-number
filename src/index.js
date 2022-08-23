module.exports = function toReadable(number) {
        if (number < 20 && number >= 0) {
            let numberOfTwo = number;
            switch (numberOfTwo) {
                case 0:
                    return 'zero';
                case 1:
                    return 'one';
                case 2:
                    return 'two';
                case 3:
                    return 'three';
                case 4:
                    return 'four';
                case 5:
                    return 'five';
                case 6:
                    return 'six';
                case 7:
                    return 'seven';
                case 8:
                    return 'eight';
                case 9:
                    return 'nine';
                case 10:
                    return 'ten';
                case 11:
                    return 'eleven';
                case 12:
                    return 'twelve';
                case 13:
                    return 'thirteen';
                case 14:
                    return 'fourteen';
                case 15:
                    return 'fifteen';
                case 16:
                    return 'sixteen';
                case 17:
                    return 'seventeen';
                case 18:
                    return 'eighteen';
                case 19:
                    return 'nineteen';
            }
        } else if (number >= 20 && number < 100) {
            let strOfNum = number.toString();
            let arrOfNum = strOfNum.split('');
            let arrOfWord = [];
            switch (arrOfNum[0]) {
                case '2':
                    arrOfWord[0] = 'twenty';
                    break;
                case '3':
                    arrOfWord[0] = 'thirty';
                    break;
                case '4':
                    arrOfWord[0] = 'forty';
                    break;
                case '5':
                    arrOfWord[0] = 'fifty';
                    break;
                case '6':
                    arrOfWord[0] = 'sixty';
                    break;
                case '7':
                    arrOfWord[0] = 'seventy';
                    break;
                case '8':
                    arrOfWord[0] = 'eighty';
                    break;
                case '9':
                    arrOfWord[0] = 'ninety';
                    break;
                default:
                    arrOfWord[0] = null;
            }
            switch (arrOfNum[1]) {
                case '1':
                    arrOfWord[1] = ' one';
                    break;
                case '2':
                    arrOfWord[1] = ' two';
                    break;
                case '3':
                    arrOfWord[1] = ' three';
                    break;
                case '4':
                    arrOfWord[1] = ' four';
                    break;
                case '5':
                    arrOfWord[1] = ' five';
                    break;
                case '6':
                    arrOfWord[1] = ' six';
                    break;
                case '7':
                    arrOfWord[1] = ' seven';
                    break;
                case '8':
                    arrOfWord[1] = ' eight';
                    break;
                case '9':
                    arrOfWord[1] = ' nine';
                    break;
                default:
                    arrOfWord[1] = null;
            }
            let word = arrOfWord.join('');
            return word;
        } else if (number >= 100 && number < 1000) {
            let strOfNum = number.toString();
            let arrOfNum = strOfNum.split('');
            let arrOfWord = [];
            switch (arrOfNum[0]) {
                case '1':
                    arrOfWord[0] = 'one hundred';
                    break;
                case '2':
                    arrOfWord[0] = 'two hundred';
                    break;
                case '3':
                    arrOfWord[0] = 'three hundred';
                    break;
                case '4':
                    arrOfWord[0] = 'four hundred';
                    break;
                case '5':
                    arrOfWord[0] = 'five hundred';
                    break;
                case '6':
                    arrOfWord[0] = 'six hundred';
                    break;
                case '7':
                    arrOfWord[0] = 'seven hundred';
                    break;
                case '8':
                    arrOfWord[0] = 'eight hundred';
                    break;
                case '9':
                    arrOfWord[0] = 'nine hundred';
                    break;
                default:
                    arrOfWord[0] = null;
            }
            switch (arrOfNum[1]) {
                case '1':
                    switch (arrOfNum[2]) {
                        case '0':
                            arrOfWord[1] = ' ten';
                            break;
                        case '1':
                            arrOfWord[1] = ' eleven';
                            break;
                        case '2':
                            arrOfWord[1] = ' twelve';
                            break;
                        case '3':
                            arrOfWord[1] = ' thirteen';
                            break;
                        case '4':
                            arrOfWord[1] = ' fourteen';
                            break;
                        case '5':
                            arrOfWord[1] = ' fifteen';
                            break;
                        case '6':
                            arrOfWord[1] = ' sixteen';
                            break;
                        case '7':
                            arrOfWord[1] = ' seventeen';
                            break;
                        case '8':
                            arrOfWord[1] = ' eighteen';
                            break;
                        case '9':
                            arrOfWord[1] = ' nineteen';
                            break;
                        default:
                            arrOfWord[1] = null;
                    };
                    break;
                case '2':
                    arrOfWord[1] = ' twenty';
                    break;
                case '3':
                    arrOfWord[1] = ' thirty';
                    break;
                case '4':
                    arrOfWord[1] = ' forty';
                    break;
                case '5':
                    arrOfWord[1] = ' fifty';
                    break;
                case '6':
                    arrOfWord[1] = ' sixty';
                    break;
                case '7':
                    arrOfWord[1] = ' seventy';
                    break;
                case '8':
                    arrOfWord[1] = ' eighty';
                    break;
                case '9':
                    arrOfWord[1] = ' ninety';
                    break;
                default:
                    arrOfWord[1] = null;
        }
            if (arrOfNum[1] !== '1') {
                switch (arrOfNum[2]) {
                    case '0':
                        arrOfWord[2] = '';
                        break;
                    case '1':
                        arrOfWord[2] = ' one';
                        break;
                    case '2':
                        arrOfWord[2] = ' two';
                        break;
                    case '3':
                        arrOfWord[2] = ' three';
                        break;
                    case '4':
                        arrOfWord[2] = ' four';
                        break;
                    case '5':
                        arrOfWord[2] = ' five';
                        break;
                    case '6':
                        arrOfWord[2] = ' six';
                        break;
                    case '7':
                        arrOfWord[2] = ' seven';
                        break;
                    case '8':
                        arrOfWord[2] = ' eight';
                        break;
                    case '9':
                        arrOfWord[2] = ' nine';
                        break;
                    default:
                        arrOfWord[2] = null;
                }
            } else { arrOfWord[2] = ''}
            let word = arrOfWord.join('');
            return word;
        }
    }
