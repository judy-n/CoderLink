import React from 'react';
import './style.css';
import PostCard from '../PostCard';
import { uid } from 'react-uid';

class Post {
    constructor(username, projectTitle, description, institution, skills) {
        this.username = username;
        this.projectTitle = projectTitle;
        this.description = description;
        this.institution = institution;
        this.skills = skills;
    }
}

class PostList extends React.Component {
    state = {
        postList: [
            new Post('Jake',
                    'Recommender system for cafes',
                    'Building a recommender system to recomment cafes based on previous food likings.',
                    'University of Toronto',
                    ['Python', 'Neural networks']),
            new Post('Nina',
                    'RPG game',
                    'Need someone proficient in C++ for my open world rpg game project',
                    'Independent',
                    ['C++', 'Unreal engine'])
        ]
    }

    render() {
        return (
            <div className='postList'>
                {this.state.postList.map((post) => {
                    return (
                        <PostCard key={uid(post)}
                            username={post.username}
                            projectTitle={post.projectTitle}
                            description={post.description}
                            institution={post.institution}
                            skills={post.skills}
                        />
                    );
                })}
            </div>
        );
    }
}

export default PostList;