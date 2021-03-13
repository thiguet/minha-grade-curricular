import React from 'react';

export interface SubjectCardProps {
    name: string;
    acronym: string;
    hours: number;
    onClick: () => {};
}

export default function Card({ name, hours, acronym, onClick }: SubjectCardProps) {
    return (
        <div>
            <div className="close-btn" onClick={onClick}>
                <img src="" />
            </div>
            <p className="subject-name">{name}</p>
            <p className="acronym">{acronym}</p>
            <p className="hours">{hours}</p>
        </div>
    );
}
