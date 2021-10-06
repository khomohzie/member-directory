exports.getAvatarInitials = (name) => {

    // First, separate the names using the space character in-between with the split method.

    const separatedNames = name.split(" ");

    /**
     * "separatedNames" is an array with two elements(strings)
     * Reference the index each string
     * Use the charAt method to extract the first character 
    */
    const initials = `${separatedNames[0].charAt(0)} ${separatedNames[1].charAt(0)}`;

    return initials;
}