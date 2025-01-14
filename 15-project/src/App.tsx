import React, { useState } from 'react';
import PostCard from './components/PostCard';
import styled from 'styled-components';

interface Post {
    id: number;
    title: string;
    content: string;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    padding: 40px;
    background: linear-gradient(to right,rgb(255, 0, 0),rgb(253, 173, 0));
    border-radius: 16px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
        padding: 20px;
        max-width: 90%;
    }
`;

const Title = styled.h1`
    font-size: 3em;
    color: #ffffff;
    text-align: center;
    margin-bottom: 40px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);

    @media (max-width: 768px) {
        font-size: 2.2em;
    }
`;

const App: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([
        {
            id: 1,
            title: 'Post 1',
            content: 'Это пример контента для карточки поста.',
        },
        {
            id: 2,
            title: 'Post 2',
            content:
                'Это второй пример карточки поста с немного другим содержанием.',
        },
    ]);

    const handleDeletePost = (id: number) => {
        setPosts(posts.filter((post) => post.id !== id));
    };

    return (
        <Container>
            <Title>Мои Посты</Title>
            {posts.map((post) => (
                <PostCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    onDelete={handleDeletePost}
                />
            ))}
        </Container>
    );
};

export default App;