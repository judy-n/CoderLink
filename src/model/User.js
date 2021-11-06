class UserEntity {

    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.name = null;
        this.age = null;
        this.pronouns = null;
        this.about = null;
        this.skills = null;
        this.institution = null;
        this.userType = "user";
    }

    addInformation(name, age, pronouns, about, skills, institution) {
        this.name = name;
        this.age = age;
        this.pronouns = pronouns;
        this.about = about;
        this.skills = skills;
        this.institution = institution;
    }

    verifyCredentials(username, password) {
        return((this.username === username && this.password === password));
    }
}

export default UserEntity;