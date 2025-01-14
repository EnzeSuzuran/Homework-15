import React from 'react';
import styled from 'styled-components';

interface PostMenuProps {
    onEdit: () => void;
    onDelete: () => void;
    onFavorite: () => void;
}

const MenuContainer = styled.div`
    position: absolute;
    top: 40px;
    right: 16px;
    background: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 100;

    @media (max-width: 768px) {
        width: 100%;
        right: 0;
    }
`;

const MenuItem = styled.button`
    background: none;
    border: none;
    padding: 8px;
    cursor: pointer;
    width: 100%;
    text-align: left;

    &:hover {
        background: #f0f0f0;
    }
`;

const PostMenu: React.FC<PostMenuProps> = ({
    onEdit,
    onDelete,
    onFavorite,
}) => {
    return (
        <MenuContainer>
            <MenuItem onClick={onEdit}>Редактировать</MenuItem>
            <MenuItem onClick={onDelete}>Удалить</MenuItem>
            <MenuItem onClick={onFavorite}>В избранное</MenuItem>
        </MenuContainer>
    );
};

export default PostMenu;