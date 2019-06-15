import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
    return (
        <div className={"ui container comments"}>
            <CommentDetail
                avatar={faker.image.avatar()}
                author={"Sam"}
                timeAgo={"Today at 4:45PM"}
                content={"Nice blog post!"}
            />
            <CommentDetail
                avatar={faker.image.avatar()}
                author={"Alex"}
                timeAgo={"Today at 2:00AM"}
                content={"I like the subject"}
            />
            <CommentDetail
                avatar={faker.image.avatar()}
                author={"Jane"}
                timeAgo={"Yesterday at 5:00PM"}
                content={"I like the writing"}
            />
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);