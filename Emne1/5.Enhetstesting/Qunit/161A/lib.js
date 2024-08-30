function fixText(text){
    if(!text) return text;
    let regexTemplateCharacter = /[A-Z]/gi;
    let regexTemplateWhiteSpace = /\s/gi;
    if(regexTemplateWhiteSpace.test(text)){
        newText = text.trim();
        newText = newText.charAt(0).toUpperCase() + newText.slice(1);
        return newText;
    }
    if(regexTemplateCharacter.test(text)){
        newText = text.charAt(0).toUpperCase() + text.slice(1)
        return newText;
    }

    return text;
}


// if(!text) return text;
// let regexTemplateCharacter = /[A-Z]/gi;
// let regexTemplateWhiteSpace = /\s/gi;

// else if(regexTemplateWhiteSpace.test(text)){
//     newText = text.slice(1) + text.charAt(0).toUpperCase()
//     console.log(regexTemplateWhiteSpace.test(text))
//     console.log(newText)
//     return newText;
// }
// return text;
// }
