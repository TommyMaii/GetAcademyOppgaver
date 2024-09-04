function fixText(text){
    if(!text) return text;
    let regexTemplateCharacter = /[A-Z]/gi;
    let regexTemplateWhiteSpace = /\s/gi;
    let regexTemplateAtSign = /@/gi;

    if(regexTemplateAtSign.test(text)){
        newText = text.replace("@", ".@.");
        return newText;
    }
    else if(regexTemplateWhiteSpace.test(text)){
        newText = text.trim();
        newText = newText.charAt(0).toUpperCase() + newText.substring(1);
        return newText;
    }
    else if(regexTemplateCharacter.test(text)){
        newText = text.charAt(0).toUpperCase() + text.substring(1)
        return newText;
    }
    return text;
}