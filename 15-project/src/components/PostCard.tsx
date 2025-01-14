import React, { useState, useEffect, useRef } from 'react';
import PostMenu from './PostMenu';
import styled from 'styled-components';

interface PostCardProps {
    id: number;
    title: string;
    content: string;
    onDelete: (id: number) => void;
}

const Card = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin: 16px;
    width: 400px;
    position: relative;
    transition: all 0.3s ease;
    background: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        width: 300px;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;

const MenuButton = styled.button`
    position: absolute;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 26px;
    right: 10px;
    top: 6px;
`;

const PostCard: React.FC<PostCardProps> = ({
    id,
    title,
    content,
    onDelete,
}) => {
    const [menuVisible, setMenuVisible] = useState<boolean>(false);
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const [postContent, setPostContent] = useState<string>(content);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target as Node)
        ) {
            setMenuVisible(false);
        }
    };

    useEffect(() => {
        if (menuVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuVisible]);

    const handleEdit = () => {
        const newContent = prompt('Введите новый текст поста:', postContent);
        if (newContent) {
            setPostContent(newContent);
        }
    };

    const handleDelete = () => {
        if (window.confirm('Вы уверены, что хотите удалить этот пост?')) {
            onDelete(id);
        }
    };

    const handleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <Card>
            <h2>{title}</h2>
            <p>{postContent}</p>
            <p>{isFavorite ? '⭐ В избранном' : ''}</p>
            <MenuButton onClick={toggleMenu}>⋮</MenuButton>
            {menuVisible && (
                <div ref={menuRef}>
                    <PostMenu
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        onFavorite={handleFavorite}
                    />
                </div>
            )}
        </Card>
    );
};

export default PostCard;