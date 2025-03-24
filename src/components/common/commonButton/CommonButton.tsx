import React from 'react';
import { Button } from 'antd';

interface CommonButtonProps {
    type?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    children: React.ReactNode;
}

const CommonButton: React.FC<CommonButtonProps> = ({
    type = 'default',
    onClick,
    disabled = false,
    loading = false,
    children,
}) => {
    return (
        <Button type={type} onClick={onClick} disabled={disabled} loading={loading}>
            {children}
        </Button>
    );
};

export default CommonButton;