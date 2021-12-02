import { v4 as uid } from 'uuid';

class PostEntity {

    constructor(author) {
        this.postID = uid();
        this.author = author;
        this.title = null;
        this.descriptionShort = null;
        this.descriptionFull = null;
        this.collaborators = [];
        this.institutions = [];
        this.skillsRequired = []
    }

    addInformation(title, descriptionShort, descriptionFull, institution, skills) {
        this.title = title;
        this.descriptionShort = descriptionShort;
        this.descriptionFull = descriptionFull;
        this.institutions.push(institution);
        this.skillsRequired = skills;
    }

    addCollaborator(username) {
        this.collaborators.push(username);
    }

    addInstitution(institution) {
        this.institutions.push(institution);
    }

}

export default PostEntity;