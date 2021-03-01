export function contentElement(type = '', data) {
    switch(type) {
        case 'displayImage' :
            console.log('Display Image');
            break;
        case 'titleOne' :
            console.log('H1 Title');
            break;
        default:
            console.log('do nothing');
    }
} 
